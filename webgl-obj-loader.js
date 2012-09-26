// WebGL Obj Loader

// Thanks to CMS for the startsWith function
// http://stackoverflow.com/questions/646628/javascript-startswith/646643#646643
if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
    return this.slice(0, str.length) == str;
  };
}

// precompile the regexes12


function Mesh( elementID ){
    /*
        With the given elementID, this parses the
        OBJ div, creates the mesh, and hides the div.
    */
    this.loadMesh = function(){
        var lines = $( '#' + elementID ).text().split( '\n' );
        for(var i=0; i<lines.length; i++){
          // if this is a vertex
          if(lines[i].startsWith('v ')){
            
          }
          // if this is a vertex normal
          else if(lines[i].startsWith['vn']){
            console.log(lines[i]);
          }
          // if this is a face
          else if(lines[i].startsWith('f ')){
            
          }
        }
        $('#' + elementID)
    }
}

$(document).ready(function(){
    var ball = new Mesh('ball');
    ball.loadMesh();
});