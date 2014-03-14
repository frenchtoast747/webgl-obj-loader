function initPointerLock() {
  // Start by going fullscreen with the element.  Current implementations
  // require the element to be in fullscreen before requesting pointer
  // lock--something that will likely change in the future.
  canvas.requestFullscreen = canvas.requestFullscreen    ||
                             canvas.mozRequestFullscreen ||
                             canvas.mozRequestFullScreen || // Older API upper case 'S'.
                             canvas.webkitRequestFullscreen;
  canvas.addEventListener('click', canvas.requestFullscreen, false);

  document.addEventListener('fullscreenchange', fullscreenChange, false);
  document.addEventListener('mozfullscreenchange', fullscreenChange, false);
  document.addEventListener('webkitfullscreenchange', fullscreenChange, false);

  document.addEventListener('pointerlockchange', pointerLockChange, false);
  document.addEventListener('mozpointerlockchange', pointerLockChange, false);
  document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
}

function fullscreenChange() {
  if ( document.webkitFullscreenElement === canvas ||
       document.mozFullscreenElement === canvas ||
       document.mozFullScreenElement === canvas ) { // Older API upper case 'S'.
    // Element is fullscreen, now we can request pointer lock
    canvas.requestPointerLock = canvas.requestPointerLock    ||
                                canvas.mozRequestPointerLock ||
                                canvas.webkitRequestPointerLock;
    canvas.requestPointerLock();
    gl.viewportWidth = canvas.width = window.innerWidth;
    gl.viewportHeight = canvas.height = window.innerHeight;
  }
  else{
    gl.viewportWidth = canvas.width = 500;
    gl.viewportHeight = canvas.height = 500;
  }
}

function pointerLockChange( e ){
  if ( document.pointerLockElement === canvas ||
       document.mozPointerLockElement === canvas ||
       document.webkitPointerLockElement === canvas )
  {
    document.addEventListener("mousemove", moveCallback, false);
  }
  else{
    document.removeEventListener("mousemove", moveCallback, false);
  }
}

function moveCallback( e ){
  if( !app.camera.disable ){
    var movementX = e.movementX       ||
                    e.mozMovementX    ||
                    e.webkitMovementX ||
                    0,
        movementY = e.movementY       ||
                    e.mozMovementY    ||
                    e.webkitMovementY ||
                    0;

  app.camera.heading += movementX / app.camera.sensitivity;
  app.camera.pitch += movementY / app.camera.sensitivity;

    if( app.camera.pitch < -90 )
      app.camera.pitch = -90;
    if( app.camera.pitch > 90 )
      app.camera.pitch = 90;
    if( app.camera.heading < -180 )
      app.camera.heading += 360
    if( app.camera.heading > 180 )
      app.camera.heading -= 360
  }
}

function cameraKeyDownHandler( e ){
  app.keys.pressed[ e.which ] = true;
  if( e.which === 16 ){
    app.camera.speed = app.camera.runSpeed;
  }
  // f
  if( e.which === 70 ){
    app.hasFlashlight = !app.hasFlashlight;
  }
  // e
  if( e.which === 69  && !app.animate && vec3.length( app.camera.position ) < 1 ){
    startAnimations();
  }
}

function cameraKeyUpHandler( e ){
  app.keys.pressed[ e.which ] = false;
  if( e.which == 16 ){
    app.camera.speed = app.camera.walkSpeed;
  }
}

function cameraShake(){
  app.camera.shakeTimer = app.camera.shakeTimer > Math.PI * 2 ? 0 : app.camera.shakeTimer + 0.01;
  app.camera.heading += app.camera.shakeAmplitude * Math.sin( app.camera.shakeTimer * app.camera.shakeFrequency );
  app.camera.pitch += app.camera.shakeAmplitude * Math.sin( app.camera.shakeTimer * app.camera.shakeFrequency );
}

function cameraMove(){
  var distance = app.elapsed * app.camera.speed;
  var camX = 0, camZ = 0;
  var pitchFactor = 1;//Math.cos( degToRad( app.camera.pitch ) );
  // forward
  if( app.keys.pressed[ app.keys.W ] ){
    camX += distance * Math.sin( degToRad( app.camera.heading ) ) * pitchFactor;
    camZ += distance * Math.cos( degToRad( app.camera.heading ) ) * pitchFactor * -1.0;
  }
  // backward
  if( app.keys.pressed[ app.keys.S ] ){
    camX += distance * Math.sin( degToRad( app.camera.heading ) ) * pitchFactor * -1.0;
    camZ += distance * Math.cos( degToRad( app.camera.heading ) ) * pitchFactor;
  }
  // strafing right
  if( app.keys.pressed[ app.keys.D ] ){
    camX += distance * Math.cos( degToRad( app.camera.heading ) );
    camZ += distance * Math.sin( degToRad( app.camera.heading ) );
  }
  // strafing left
  if( app.keys.pressed[ app.keys.A ] ){
    camX += -distance * Math.cos( degToRad( app.camera.heading ) );
    camZ += -distance * Math.sin( degToRad( app.camera.heading ) );
  }

  if( camX > distance )
    camX = distance;
  if( camX < -distance )
    camX = -distance;
  if( camZ > distance )
    camZ = distance;
  if( camZ < -distance )
    camZ = -distance;

  app.camera.position[ X ] += camX;
  app.camera.position[ Z ] += camZ;
}
