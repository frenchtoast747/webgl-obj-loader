function animate() {
  app.timeNow = new Date().getTime();
  app.elapsed = app.timeNow - app.lastTime;
  if (app.lastTime != 0) {
    // animate stuff
    if( !app.camera.disable ){
      cameraMove();
    }
    if( app.camera.shake ){
      cameraShake();
    }
  }
  app.lastTime = app.timeNow;
}

function tick() {
  requestAnimFrame(tick);
  app.drawScene();
  animate();
}

function webGLStart( meshes ) {
  app.meshes = meshes;
  canvas = document.getElementById("mycanvas");
  initGL(canvas);
  initShaders();
  initBuffers();
  initTunnel();
  initPointerLock();
  initTextures();

  document.onkeydown = cameraKeyDownHandler;
  document.onkeyup = cameraKeyUpHandler;

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.enable(gl.DEPTH_TEST);

  tick();
}

window.onload = function(){
  OBJ.downloadMeshes({
      'tunnel_ceiling':'models/tunnel_ceiling.obj',
      'tunnel_walls':'models/tunnel_walls.obj',
      'room_walls': 'models/room_walls.obj',
      'room_ceiling': 'models/room_ceiling.obj',
      'room_floor': 'models/room_floor.obj',
      'room_tunnel_ceiling': 'models/room_tunnel_ceiling.obj',
      'room_tunnel_walls': 'models/room_tunnel_walls.obj',
      'room_wall_broken': 'models/room_wall_broken.obj',
      'room_wall_unbroken': 'models/room_wall_unbroken.obj',
      'suzanne': 'models/suzanne.obj',
      'pedestal': 'models/pedestal.obj',
      'boulder': 'models/boulder.obj',
    },
    webGLStart
  );
};
