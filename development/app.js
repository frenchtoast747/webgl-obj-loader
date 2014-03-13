/**
 * Provides requestAnimationFrame in a cross browser way.
 */
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         window.oRequestAnimationFrame ||
         window.msRequestAnimationFrame ||
         function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
           return window.setTimeout(callback, 1000/60);
         };
})();

var meshes = {};

function webGLStart(meshes){
  console.log(meshes);
}

window.onload = function(){
  OBJ.downloadMeshes({
    'suzanne': '/development/models/suzanne.obj',
    'sphere': '/development/models/sphere.obj'
  }, webGLStart);
}
