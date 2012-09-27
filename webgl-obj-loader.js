// webgl-obj-loader.js

// Thanks to CMS for the startsWith function
// http://stackoverflow.com/questions/646628/javascript-startswith/646643#646643
if (typeof String.prototype.startsWith !== 'function') {
  String.prototype.startsWith = function (str){
    return this.slice(0, str.length) === str;
  };
}

// precompile the regexes
// var floatsRegEx = /[-+]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?/

function Mesh( objectData ){
    /*
        With the given elementID or string of the OBJ, this parses the
        OBJ and creates the mesh.
    */
    
    // 'v'
    this.verts = new Array();
    // 'vn'
    this.vertNormals = new Array();
    // 'f vIA/tIA/vNIA'
    this.vertexIndexArray = new Array();
    this.textureIndexArray = new Array();
    this.vertexNormalIndexArray = new Array();
    
    // array of lines separated by the newline
    var lines = objectData.split( '\n' )
    for( var i=0; i<lines.length; i++ ){
      // if this is a vertex
      if( lines[ i ].startsWith( 'v ' ) ){
        line = lines[ i ].slice( 2 ).split( " " )
        this.verts.push( line[ 0 ] );
        this.verts.push( line[ 1 ] );
        this.verts.push( line[ 2 ] );
      }
      // if this is a vertex normal
      else if( lines[ i ].startsWith( 'vn' ) ){
        line = lines[ i ].slice( 3 ).split( " " )
        this.vertNormals.push( line );
      }
      // if this is a face
      else if( lines[ i ].startsWith( 'f ' ) ){
        line = lines[ i ].slice( 2 ).split( " " );
        for(var j=0; j<line.length; j++){
          face = line[ j ].split( '/' );
          this.vertexIndexArray.push( face[ 0 ] - 1 );
          this.textureIndexArray.push( face[ 1 ] - 1 );
          this.vertexNormalIndexArray.push( face[ 2 ] - 1 );
        }
      }
    }
    // now use the vertex normal indices to generate a new 
    // array of vertex normals that equals the length of the 
    // face (element) array
    var newVN = new Array();
    for( var i=0; i<this.vertexNormalIndexArray.length; i++ ){
      newVN.push( this.vertNormals[ this.vertexNormalIndexArray[ i ] ][ 0 ] );
      newVN.push( this.vertNormals[ this.vertexNormalIndexArray[ i ] ][ 1 ] );
      newVN.push( this.vertNormals[ this.vertexNormalIndexArray[ i ] ][ 2 ] );
    }
    // set vertNormals to the newly created array
    this.vertNormals = newVN;
    console.log("Verts: " + this.vertexIndexArray);
    console.log("Normals: " + this.vertNormals);
}








