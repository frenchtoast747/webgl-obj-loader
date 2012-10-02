// webgl-obj-loader.js

// Thanks to CMS for the startsWith function
// http://stackoverflow.com/questions/646628/javascript-startswith/646643#646643
if (typeof String.prototype.startsWith !== 'function') {
  String.prototype.startsWith = function (str){
    return this.slice(0, str.length) === str;
  };
}

function Mesh( objectData ){
    /*
        With the given elementID or string of the OBJ, this parses the
        OBJ and creates the mesh.
    */

    var verts = [];
    var vertNormals = [];
    
    // unpacking stuff
    var packed = {};
    packed.verts = [];
    packed.norms = [];
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
      // if this is a face
      else if( lines[ i ].startsWith( 'f ' ) ){
        line = lines[ i ].slice( 2 ).split( " " );
        for(var j=0; j<line.length; j++){
            if( line[ j ] in packed.hashindices ){
                packed.indices.push( packed.hashindices[ line[ j ] ] );
            }
            else{
                face = line[ j ].split( '/' );
                packed.verts.push( verts[ (face[ 0 ] - 1) * 3 + 0 ] );
                packed.verts.push( verts[ (face[ 0 ] - 1) * 3 + 1 ] );
                packed.verts.push( verts[ (face[ 0 ] - 1) * 3 + 2 ] );
                packed.norms.push( vertNormals[ (face[ 2 ] - 1) * 3 + 0  ] );
                packed.norms.push( vertNormals[ (face[ 2 ] - 1) * 3 + 1 ] * 3 + 1 );
                packed.norms.push( vertNormals[ (face[ 2 ] - 1) * 3 + 2 ] );
                packed.hashindices[ line[ j ] ] = packed.index;
                packed.indices.push( packed.index );
                packed.index += 1;
            }
        }
      }
    }
    this.vertices = packed.verts;
    this.vertexNormals = packed.norms;
    this.indices = packed.indices;
}








