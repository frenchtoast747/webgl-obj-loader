// webgl-obj-loader.js

// Thanks to CMS for the startsWith function
// http://stackoverflow.com/questions/646628/javascript-startswith/646643#646643
if (typeof String.prototype.startsWith !== 'function') {
  String.prototype.startsWith = function (str){
    return this.slice(0, str.length) === str;
  };
}
var obj_loader = {};

obj_loader.Mesh = function( objectData ){
    /*
        With the given elementID or string of the OBJ, this parses the
        OBJ and creates the mesh.
    */

    var verts = [];
    var vertNormals = [];
    var textures = [];
    
    // unpacking stuff
    var packed = {};
    packed.verts = [];
    packed.norms = [];
    packed.textures = [];
    packed.hashindices = {};
    packed.indices = [];
    packed.index = 0;
    
    // array of lines separated by the newline
    var lines = objectData.split( '\n' )
    for( var i=0; i<lines.length; i++ ){
      // if this is a vertex
      if( lines[ i ].startsWith( 'v ' ) ){
        line = lines[ i ].slice( 2 ).split( " " )
        verts.push( line[ 0 ] );
        verts.push( line[ 1 ] );
        verts.push( line[ 2 ] );
      }
      // if this is a vertex normal
      else if( lines[ i ].startsWith( 'vn' ) ){
        line = lines[ i ].slice( 3 ).split( " " )
        vertNormals.push( line[ 0 ] );
        vertNormals.push( line[ 1 ] );
        vertNormals.push( line[ 2 ] );
      }
      // if this is a texture
      else if( lines[ i ].startsWith( 'vt' ) ){
        line = lines[ i ].slice( 3 ).split( " " )
        textures.push( line[ 0 ] );
        textures.push( line[ 1 ] );
      }
      // if this is a face
      else if( lines[ i ].startsWith( 'f ' ) ){
        line = lines[ i ].slice( 2 ).split( " " );
        var quad = false;
        for(var j=0; j<line.length; j++){
            // Triangulating quads
            // quad: 'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2 v3/t3/vn3/'
            // corresponding triangles:
            //      'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2'
            //      'f v2/t2/vn2 v3/t3/vn3 v0/t0/vn0'
            if(j == 3 && !quad) {
                // add v2/t2/vn2 in again before continuing to 3
                j = 2;
                quad = true;
            }

            if( line[ j ] in packed.hashindices ){
                packed.indices.push( packed.hashindices[ line[ j ] ] );
            }
            else{
                face = line[ j ].split( '/' );
                // vertex position
                packed.verts.push( verts[ (face[ 0 ] - 1) * 3 + 0 ] );
                packed.verts.push( verts[ (face[ 0 ] - 1) * 3 + 1 ] );
                packed.verts.push( verts[ (face[ 0 ] - 1) * 3 + 2 ] );
                // vertex textures
                packed.textures.push( textures[ (face[ 1 ] - 1) * 2 + 0 ] );
                packed.textures.push( textures[ (face[ 1 ] - 1) * 2 + 1 ] );
                // vertex normals
                packed.norms.push( vertNormals[ (face[ 2 ] - 1) * 3 + 0 ] );
                packed.norms.push( vertNormals[ (face[ 2 ] - 1) * 3 + 1 ] );
                packed.norms.push( vertNormals[ (face[ 2 ] - 1) * 3 + 2 ] );
                // add the newly created vertex to the list of indices
                packed.hashindices[ line[ j ] ] = packed.index;
                packed.indices.push( packed.index );
                // increment the counter
                packed.index += 1;
            }

            if(j == 3 && quad) {
                // add v0/t0/vn0 onto the second triangle
                packed.indices.push( packed.hashindices[ line[ 0 ] ] );
            }
        }
      }
    }
    this.vertices = packed.verts;
    this.vertexNormals = packed.norms;
    this.textures = packed.textures;
    this.indices = packed.indices;
}


/* UTIL FUNCTIONS */
obj_utils = {};

/*
  nameAndURLs should contain an object array with a unique object name as
  the key and a URL as the value
  
  completionCallback should contain a function that will take one parameter:
  an object array where the keys will be the unique object name and the value
  will be a Mesh object
*/
obj_utils.downloadMeshes = function( nameAndURLs, completionCallback ){
    var ajaxes = new Array();
    var meshes = new Object();

    $.each( nameAndURLs, function( name, URL ){
        ajaxes.push($.ajax({
                url: URL,
                dataType: 'text',
                success: function( data ){
                    meshes[name] = new obj_loader.Mesh( data );
                }
            })
        );
    });

    $.when.apply( $, ajaxes ).done(function(){
        completionCallback( meshes );
    });
}

obj_utils.initMeshBuffers = function( gl, mesh ){
  /*
    Takes in the WebGL context and a Mesh, then creates and appends the buffers
    to the mesh object.

    The new mesh attributes are:
      mesh.normalBuffer   contains the model's Vertex Normals
        mesh.normalBuffer.itemSize  set to 3 items
        mesh.normalBuffer.numItems  the total number of vertex normals

      mesh.textureBuffer  contains the model's Texture Coordinates
        mesh.textureBuffer.itemSize set to 2 items
        mesh.textureBuffer.numItems the number of texture coordinates

      mesh.vertexBuffer   contains the model's Vertex Position Coordinates (does not include w)
        mesh.vertexBuffer.itemSize  set to 3 items
        mesh.vertexBuffer.numItems  the total number of vertices

      mesh.indexBuffer    contains the indices of the for the faces
                          These are to be used with gl.drawElements()
                          and gl.TRIANGLES
        mesh.indexBuffer.itemSize   is set to 1
        mesh.indexBuffer.numItems   the total number of indices
  */
  mesh.normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, mesh.normalBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.vertexNormals), gl.STATIC_DRAW);
  mesh.normalBuffer.itemSize = 3;
  mesh.normalBuffer.numItems = mesh.vertexNormals.length / 3;

  mesh.textureBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, mesh.textureBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.textures), gl.STATIC_DRAW);
  mesh.textureBuffer.itemSize = 2;
  mesh.textureBuffer.numItems = mesh.textures.length / 2;

  mesh.vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, mesh.vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.vertices), gl.STATIC_DRAW);
  mesh.vertexBuffer.itemSize = 3;
  mesh.vertexBuffer.numItems = mesh.vertices.length / 3;

  mesh.indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(mesh.indices), gl.STATIC_DRAW);
  mesh.indexBuffer.itemSize = 1;
  mesh.indexBuffer.numItems = mesh.indices.length;
}