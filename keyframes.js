function getPercentage(frameLength, startTime, timeNow){
  var time = frameLength * 1000;
  timeNow = timeNow - startTime;
  return timeNow / time;
}

function startAnimations(){
  app.animate = true;
  app.camera.disable = true;
  setupForMoveCameraToMonkey();
  app.animations.currentAnimation = moveCameraToMokey;
  if( !app.hasFlashlight ){
    app.hasFlashlight = true;
  }
}

function setupForMoveCameraToMonkey(){
  app.animations.moveToMonkeyStartTime = app.timeNow;
  app.animations.moveToMonkeyStartPosition = app.camera.position;
  app.animations.moveToMonkeyStartHeadingPitch = [app.camera.heading, app.camera.pitch, 0, 0];
}

// keyframes
function moveCameraToMokey(){
  var percentage = getPercentage(app.animations.moveToMonkeyTime, app.animations.moveToMonkeyStartTime, app.timeNow);
  if( percentage > 1.0 ){
    setupForTakeMonkey();
  }
  vec3.lerp( app.animations.moveToMonkeyStartPosition, app.animations.moveToMonkeyEndPosition, percentage/10, app.camera.position );
  var temp = quat4.create();
  quat4.slerp( app.animations.moveToMonkeyStartHeadingPitch, [0,0,0,0], percentage, temp );
  app.camera.heading = temp[0];
  app.camera.pitch = temp[1];
}

function setupForTakeMonkey(){
  app.animations.takeMonkeyStartTime = app.timeNow;
  app.animations.currentAnimation = takeMonkey;
  app.animations.takeMonkeyStartPosition = app.monkey.position;
}

function takeMonkey(){
  var percentage = getPercentage(app.animations.takeMonkeyTime, app.animations.takeMonkeyStartTime, app.timeNow);
  if( percentage > 1.0 ){
    setupForBeginShake();
    app.monkey.position = [1000,1000,1000];
    return;
  }
  vec3.lerp( app.animations.takeMonkeyStartPosition, app.animations.takeMonkeyEndPosition, percentage/10, app.monkey.position );
}

function setupForBeginShake(){
  app.animations.currentAnimation = beginShake;
  app.camera.shake = true;
}

function beginShake(){
  if( app.camera.shakeAmplitude > 0.3 ){
    setupWalkBackwards();
    return;
  }
  app.camera.shakeAmplitude += 0.001;
}

function setupWalkBackwards(){
  app.animations.currentAnimation = walkBackwards;
}

function walkBackwards(){
  app.camera.position[Z] += 0.01;
  if( app.camera.position[Z] > 1.0 ){
    setupBoulderCrash();
    return;
  }
}

function setupBoulderCrash(){
  app.startAnimateTime = app.timeNow;
  app.breakWalls = true;
  app.animations.currentAnimation = boulderCrash;
  app.animations.boulderCrashStartTime = app.timeNow;
}

function boulderCrash(){
  app.camera.position[Z] += 0.01;
  app.boulder.position[Z] += 0.02;
  app.wallScale += 0.1;
  app.boulder.rotation = app.boulder.rotation > 360 ? 0 : app.boulder.rotation + 2;
  
  mvPushMatrix();
    mat4.translate( app.mvMatrix, [0,0.4,-4] );
    drawParticles( app.particles );
  mvPopMatrix();
  
  mvPushMatrix()
    mat4.scale( app.mvMatrix, [app.wallScale,app.wallScale,app.wallScale] );
    drawObject( app.models.room_wall_broken, 0 );
  mvPopMatrix();
  
  mvPushMatrix()
    mat4.translate( app.mvMatrix, app.boulder.position );
    mat4.rotate( app.mvMatrix, degToRad( app.boulder.rotation ), [1,0,0] )
    drawObject( app.models.boulder, 0 );
  mvPopMatrix();
  
  if( app.camera.position[Z] > 2.0 ){
    setupTurnAround();
    return;
  }
}

function setupTurnAround(){
  app.animations.currentAnimation = turnAround;
  app.animations.turnAroundStartTime = app.timeNow;
}

function turnAround(){
  mvPushMatrix()
    mat4.translate( app.mvMatrix, app.boulder.position );
    mat4.rotate( app.mvMatrix, degToRad( app.boulder.rotation ), [1,0,0] )
    drawObject( app.models.boulder, 0 );
  mvPopMatrix();
  
  app.camera.position[Z] += 0.01;
  app.boulder.position[Z] += 0.02;
  app.boulder.rotation = app.boulder.rotation > 360 ? 0 : app.boulder.rotation + 2;
  
  var percentage = getPercentage(app.animations.turnAroundTime, app.animations.turnAroundStartTime, app.timeNow);
  var temp = quat4.create();
  quat4.slerp( [0,0,0,0], [180,0,0,0], percentage, temp );
  app.camera.heading = temp[0];
  if( percentage > 1.0 ){
    setupFadeOut();
    return;
  }
}

function setupFadeOut(){
  app.animations.currentAnimation = fadeOut;
  app.ambientIntensityStart = app.ambientIntensity;
  app.diffuseIntensityStart = app.diffuseIntensity;
}

function fadeOut(){
  app.camera.position[Z] += 0.02;
  app.ambientIntensity -= 0.05;
  app.diffuseIntensity -= 0.05;
  
  if( app.ambientIntensity < 0 && app.diffuseIntensity < 0 ){
    app.hasFlashlight = false;
    app.ambientIntensity = 0;
    app.diffuseIntensity = 0;
    setupFadeIn();
    return;
  }
}

function setupFadeIn(){
  app.animations.currentAnimation = fadeIn;
//  app.ambientIntensity = app.ambientIntensityStart;
//  app.diffuseIntensity = app.diffuseIntensityStart;
  app.drawScene = drawTunnelScene;
}

function fadeIn(){
  if( app.ambientIntensity < app.ambientIntensityStart )
	app.ambientIntensity += 0.025;
  if( app.diffuseIntensity < app.diffuseIntensityStart )
	app.diffuseIntensity += 0.025;
  if( app.ambientIntensity > app.ambientIntensityStart && app.diffuseIntensity > app.diffuseIntensityStart ){
	setupTunnelRun();
    return;
  }
}

function setupTunnelRun() {
  app.animations.currentAnimation = tunnelRun;
  app.hasFlashlight = true;
}

function tunnelRun() {
  app.animate = false;
}