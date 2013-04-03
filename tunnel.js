app.tunneldata = {};
app.tunneldata.length = 10;
app.tunneldata.angleRange = 12;
app.tunneldata.angleMin = -app.tunneldata.angleRange/2;
app.tunneldata.angle = {};
app.tunneldata.ground = {};
app.tunneldata.groundSpace = {};
app.tunneldata.groundTexture = "textures/stony_ground.jpg";
app.tunneldata.wall = {};
app.tunneldata.celling = {};
app.tunneldata.cellingSpace = {};
app.tunneldata.cellingTexture = "textures/stony_ground.jpg"
app.tunneldata.space = {};

function drawTunnelScene() {
  gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 1000.0, app.pMatrix);

  mat4.identity(app.mvMatrix);

  mat4.translate(app.mvMatrix, [app.movement.current.px, 0, app.movement.current.pz]);
  
  setUniforms();
  mat4.translate(app.mvMatrix, [0,.1,-.5]);
  drawTunnel();

  if( app.animate ){
    app.animations.currentAnimation();
  }
}

function initTunnel() {
  //initBuffers
  app.tunneldata.square = {};
  app.tunneldata.square.VPB = Array2Buffer([ .5, 0,  .5,
                                            .5, 0, -.5,
                                           -.5, 0, -.5,
                                           -.5, 0,  .5], 3, 4);
  app.tunneldata.square.VTB = Array2Buffer([ 1.0, 0.0,
                                            1.0, 1.0,
                                            0.0, 1.0,
                                            0.0, 0.0], 2, 4);
  app.tunneldata.square.VNB = Array2Buffer([ 0.0, 1.0, 0.0,
                                            0.0, 1.0, 0.0,
                                            0.0, 1.0, 0.0,
                                            0.0, 1.0, 0.0,], 3, 4);
  app.tunneldata.square.VIB = Array2EBuffer([ 0, 1, 2, 0, 2, 3 ], 1, 6);

  for(i = app.tunneldata.angleMin; i < app.tunneldata.angleMin + app.tunneldata.angleRange; i++) {
    app.tunneldata.groundSpace[i] = genGroundSpace(i, app.tunneldata.groundTexture);
    app.tunneldata.cellingSpace[i] = genGroundSpace(i, app.tunneldata.cellingTexture);
  }
  
  //tunnel variance
  for(i = 0; i < app.tunneldata.length; i++) {
    app.tunneldata.angle[i] = Math.floor(Math.random()*app.tunneldata.angleRange)+app.tunneldata.angleMin;
  }

  app.tunneldata.ground = initModel(app.tunneldata.square, app.tunneldata.groundTexture);
  app.tunneldata.wall = initModel(app.tunneldata.square, "textures/stone_wall.png");
  app.tunneldata.celling = initModel(app.tunneldata.square, app.tunneldata.cellingTexture);
}

function genGroundSpace(angle, url) {
  var model = {};
  model.mesh = {};
  angle = degToRad(angle);
  if (angle > 0) {
    model.mesh.vertexBuffer = Array2Buffer([ -.5+Math.cos(angle), 0, -.5-Math.sin(angle),
                                           .5, 0, -.5,
                                           -.5, 0, -.5], 3, 3);
    model.mesh.textureBuffer = Array2Buffer([ Math.cos(angle), Math.sin(angle),
                                          1.0, 0.0,
                                          0.0, 0.0], 2, 3);
  }
  else if (angle < 0) {
    model.mesh.vertexBuffer = Array2Buffer([ .5-Math.cos(angle), 0, -.5+Math.sin(angle),
                                           .5, 0, -.5,
                                           -.5, 0, -.5], 3, 3);
    model.mesh.textureBuffer = Array2Buffer([ 1-Math.cos(angle), Math.sin(angle),
                                          1.0, 0.0,
                                          0.0, 0.0], 2, 3);
  }
  else
    return null;
  model.mesh.normalBuffer = Array2Buffer([ 0.0, 1.0, 0.0,
                                         0.0, 1.0, 0.0,
                                         0.0, 1.0, 0.0], 3, 3);
  model.mesh.indexBuffer = Array2EBuffer([ 0, 1, 2 ], 1, 3);
  initTexture( model, url );
  return model;
}

function initModel(obj, url) {
  var model = {};
  model.mesh = {};
  model.mesh.vertexBuffer = obj.VPB;
  model.mesh.textureBuffer = obj.VTB;
  model.mesh.normalBuffer = obj.VNB;
  model.mesh.indexBuffer = obj.VIB;
  initTexture( model,  url );
  return model;
}

function updateTunnel() {
  for(i = 0; i < app.tunneldata.length-1; i++) {
    app.tunneldata.angle[i] = app.tunneldata.angle[i+1];
  }
  app.tunneldata.angle[app.tunneldata.length-1] = Math.floor(Math.random()*app.tunneldata.angleRange)+app.tunneldata.angleMin;
}

function drawTunnel() {
  mvPushMatrix();
  mat4.translate(app.mvMatrix, [0, -.25, 0]);
  drawTunnelSegment();
  if (app.tunneldata.angle[0] !== 0) {
    drawObject ( app.tunneldata.groundSpace[app.tunneldata.angle[0]] );
    mvPushMatrix();
    mat4.translate(app.mvMatrix, [0, .5, 0]);
    drawObject ( app.tunneldata.cellingSpace[app.tunneldata.angle[0]] );
    mvPopMatrix();
  }
  for( i = 0; i < app.tunneldata.length; i++ ){
    if (app.tunneldata.angle[i] > 0) {
      mvPushMatrix();
      mat4.translate(app.mvMatrix, [.5, 0, -.5]);
      mat4.rotateY(app.mvMatrix, degToRad(-app.tunneldata.angle[i])/2.0);
      mat4.translate(app.mvMatrix, [0, 0, -.5]);
      mat4.rotateZ(app.mvMatrix, Math.PI/2.0);
      drawObject( app.tunneldata.wall );
      mvPopMatrix();
      mat4.translate(app.mvMatrix, [-.5, 0, -.5]);
      mat4.rotateY(app.mvMatrix, degToRad(app.tunneldata.angle[i]));
      mat4.translate(app.mvMatrix, [.5,0,-.5]);
    }
    else if (app.tunneldata.angle[i] < 0) {
      mvPushMatrix();
      mat4.translate(app.mvMatrix, [-.5, 0, -.5]);
      mat4.rotateY(app.mvMatrix, degToRad(-app.tunneldata.angle[i])/2.0);
      mat4.translate(app.mvMatrix, [0, 0, -.5]);
      mat4.rotateZ(app.mvMatrix, -Math.PI/2.0);
      drawObject( app.tunneldata.wall );
      mvPopMatrix();
      mat4.translate(app.mvMatrix, [.5, 0, -.5]);
      mat4.rotateY(app.mvMatrix, degToRad(app.tunneldata.angle[i]));
      mat4.translate(app.mvMatrix, [-.5, 0,-.5]);
    }
    else
      mat4.translate(app.mvMatrix, [0,0, -1]);
    drawTunnelSegment();
    if (i < app.tunneldata.length-1 && app.tunneldata.angle[i+1] !== 0) {
      drawObject ( app.tunneldata.groundSpace[app.tunneldata.angle[i+1]] );
      mvPushMatrix();
      mat4.translate(app.mvMatrix, [0, .5, 0]);
      drawObject ( app.tunneldata.cellingSpace[app.tunneldata.angle[i+1]] );
      mvPopMatrix();
    }
  }
  mvPopMatrix();
  updateMovement();
}

function drawTunnelSegment() {
  drawObject( app.tunneldata.ground );
    
  mvPushMatrix();
  mat4.translate(app.mvMatrix, [-.5, 0, 0]);
  mat4.rotateZ(app.mvMatrix, -Math.PI/2);
  drawObject( app.tunneldata.wall );
  mvPopMatrix();

  mvPushMatrix();
  mat4.translate(app.mvMatrix, [.5, 0, 0]);
  mat4.rotateZ(app.mvMatrix, Math.PI/2);
  drawObject( app.tunneldata.wall );
  mvPopMatrix();

  mvPushMatrix();
  mat4.translate(app.mvMatrix, [0, .5, 0]);
  drawObject( app.tunneldata.celling );
  mvPopMatrix();
 }