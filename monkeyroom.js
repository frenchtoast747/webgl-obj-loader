app.monkeyPositionTimer = 0;

function floatMonkey(){
  app.monkeyPositionTimer = app.monkeyPositionTimer > Math.PI * 2 ? 0 : app.monkeyPositionTimer + 0.05;
  app.monkey.position[Y] = Math.sin( app.monkeyPositionTimer ) / 1000;
}
app.monkeyRoomCollision = 3.95;
function roomCollisionCheck(){
  if( app.camera.position[X] > app.monkeyRoomCollision ){
    app.camera.position[X] = app.monkeyRoomCollision
  }
  if( app.camera.position[X] < -app.monkeyRoomCollision ){
    app.camera.position[X] = -app.monkeyRoomCollision
  }
  if( app.camera.position[Z] > app.monkeyRoomCollision ){
    app.camera.position[Z] = app.monkeyRoomCollision
  }
  if( app.camera.position[Z] < -app.monkeyRoomCollision ){
    app.camera.position[Z] = -app.monkeyRoomCollision
  }
}

function createParticles( num, min, max, maxVector, maxTTL, particles ){
  var rangeX = max[X] - min[X];
  var halfRangeX = rangeX/2;
  var rangeY = max[Y] - min[Y];
  var halfRangeY = rangeY/2;
  var rangeZ = max[Z] - min[Z];
  var halfRangeZ = rangeZ/2;
  
  var halfMaxVector = maxVector / 2;
  
  // holds single dimension array of x,y,z coords
  particles.locations = [];
  // holds single dimension array of vector direction using x,y,z coords
  particles.vectors = [];
  // holds a single float for the particle's time to live
  particles.ttl = [];
  for(i=0;i<num;i+=1){
    // push x
    particles.locations.push( (Math.random() *  rangeX) - halfRangeX );
    // push y
    particles.locations.push( (Math.random() *  rangeY) - halfRangeY );
    // push z
    particles.locations.push( (Math.random() *  rangeZ) - halfRangeZ );
    // vectors
    particles.vectors.push( (Math.random() *  maxVector) - halfMaxVector );
    particles.vectors.push( (Math.random() *  maxVector) - halfMaxVector );
    particles.vectors.push( (Math.random() *  maxVector) - halfMaxVector + 3);
    // TTL
    particles.ttl.push( Math.random() * maxTTL );
  }
  
  particles.locationsBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, particles.locationsBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array( particles.locations ), gl.STATIC_DRAW);
  particles.locationsBuffer.itemSize = 3;
  particles.locationsBuffer.numItems = particles.locations.length / 3;
  
  particles.vectorsBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, particles.vectorsBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array( particles.vectors ), gl.STATIC_DRAW);
  particles.vectorsBuffer.itemSize = 3;
  particles.vectorsBuffer.numItems = particles.vectors.length / 3;
  
  particles.ttlBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, particles.ttlBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array( particles.ttl ), gl.STATIC_DRAW);
  particles.ttlBuffer.itemSize = 1;
  particles.ttlBuffer.numItems = particles.ttl.length;
  
}

function drawMonkeyRoom(){
  floatMonkey();
  roomCollisionCheck();
  gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.01, 1000.0, app.pMatrix);
  
  vec3.negate( app.camera.position, app.camera.inversePosition )
  
  mat4.identity( app.mvMatrix )
  // camera position and rotations
  mat4.rotate( app.mvMatrix, degToRad( app.camera.pitch ), [1,0,0] );
  // account for pitch rotation and light down vector
  mat4.rotate( app.mvMatrix, degToRad( app.camera.heading ), [0,1,0] );
  mat4.translate( app.mvMatrix, app.camera.inversePosition );
  
  gl.useProgram( shaderProgram );
  
  var normalMatrix = mat3.create();
  mat4.toInverseMat3(app.mvMatrix, normalMatrix);
  mat3.transpose(normalMatrix);
  mat3.multiplyVec3( normalMatrix, app.lightVectorStatic, app.lightVector )
  mat4.multiplyVec3( app.mvMatrix, app.lightLocationStatic, app.lightLocation )
  gl.uniform3fv( shaderProgram.lightLocation, app.lightLocation );
  gl.uniform3fv( shaderProgram.lightVector, app.lightVector );
  
  setUniforms();
  
  mvPushMatrix();
    mat4.scale( app.mvMatrix, [2,2,2] )
    drawObject( app.models.room_walls, 0 );
    if( !app.breakWalls ){
      drawObject( app.models.room_wall_unbroken, 0 );
    }
    drawObject( app.models.room_floor, 0 );
    drawObject( app.models.room_ceiling, 0 );
    drawObject( app.models.pedestal, 50, [0.75,0.75,0.75,1.0] );
      
      mvPushMatrix();
        mat4.rotate( app.mvMatrix, degToRad( 180 ), [0,1,0] );
        mat4.translate( app.mvMatrix, app.monkey.position );
        gl.uniform3fv( shaderProgram.lightSpecularColor, lightIntesity( 0.5, 1.0, 1.0, 0.1 ) );
        drawObject( app.models.suzanne, 100, [0.83,0.69,0.22,1.0] );
      mvPopMatrix();
      
      mvPushMatrix();
        mat4.translate( app.mvMatrix, [0,2,0] );
        gl.uniform3fv( shaderProgram.ambientColorUniform, lightIntesity( 2.0, 1,1,1 ) );
        drawObject( app.models.skylight, 0, [0.53,0.81,0.98,1.0] );
        gl.uniform3fv( shaderProgram.ambientColorUniform, lightIntesity( app.ambientIntensity, 0.3,0.3,0.3 ) );
      mvPopMatrix();
    
    drawObject( app.models.room_tunnel_ceiling, 0 );
    drawObject( app.models.room_tunnel_walls, 0 );
  mvPopMatrix();
  
  // use the particle shaders
  if( app.animate ){
    app.animations.currentAnimation();
  }
}

app.drawScene = drawMonkeyRoom;
