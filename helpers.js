function drawObject( model, shininess, color ){
  /*
    Takes in a model that points to a mesh and draws the object on the scene.
    Assumes that the setMatrixUniforms function exists
    as well as the shaderProgram has a uniform attribute called "samplerUniform"
  */
  gl.useProgram( shaderProgram );
  
  gl.bindBuffer(gl.ARRAY_BUFFER, model.mesh.vertexBuffer);
  gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, model.mesh.vertexBuffer.itemSize, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, model.mesh.textureBuffer);
  gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, model.mesh.textureBuffer.itemSize, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, model.mesh.normalBuffer);
  gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, model.mesh.normalBuffer.itemSize, gl.FLOAT, false, 0, 0);

  if( 'texture' in model ){
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, model.texture);
    gl.uniform1i(shaderProgram.samplerUniform, 0);
    gl.uniform1i(shaderProgram.hasTexure, true);
  }
  else{
    gl.uniform1i(shaderProgram.hasTexure, false);
    gl.uniform4fv( shaderProgram.modelColor, color );
  }
  
  if( shininess ){
    gl.uniform1f( shaderProgram.materialShininessUniform, shininess );
  }
  else{
    gl.uniform1f( shaderProgram.materialShininessUniform, 0 );
  }

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.mesh.indexBuffer);
  setMatrixUniforms();
  gl.drawElements(gl.TRIANGLES, model.mesh.indexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function drawParticles( particles ){
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
  gl.disable(gl.DEPTH_TEST);

  gl.useProgram( particleShaderProgram );

  gl.bindBuffer(gl.ARRAY_BUFFER, particles.locationsBuffer);
  gl.vertexAttribPointer(particleShaderProgram.particlePosition, particles.locationsBuffer.itemSize, gl.FLOAT, false, 0, 0);

  gl.bindBuffer(gl.ARRAY_BUFFER, particles.vectorsBuffer);
  gl.vertexAttribPointer(particleShaderProgram.particleVector, particles.vectorsBuffer.itemSize, gl.FLOAT, false, 0, 0);
  
  gl.bindBuffer(gl.ARRAY_BUFFER, particles.ttlBuffer);
  gl.vertexAttribPointer(particleShaderProgram.particleTTL, particles.ttlBuffer.itemSize, gl.FLOAT, false, 0, 0);

  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, particles.texture);
  gl.uniform1i(particleShaderProgram.samplerUniform, 0);
  
  gl.uniform1f( particleShaderProgram.time, ( app.timeNow - app.startAnimateTime ) / app.particles.rate );
  gl.uniformMatrix4fv(particleShaderProgram.pMatrixUniform, false, app.pMatrix);
  gl.uniformMatrix4fv(particleShaderProgram.mvMatrixUniform, false, app.mvMatrix);

  gl.drawArrays(gl.POINTS, 0, particles.locationsBuffer.numItems);
  
  gl.disable(gl.BLEND);
  gl.enable(gl.DEPTH_TEST);
}

function mvPushMatrix() {
    var copy = mat4.create();
    mat4.set(app.mvMatrix, copy);
    app.mvMatrixStack.push(copy);
}

function mvPopMatrix() {
  if (app.mvMatrixStack.length == 0) {
      throw "Invalid popMatrix!";
  }
  app.mvMatrix = app.mvMatrixStack.pop();
}

function setMatrixUniforms() {
  gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, app.pMatrix);
  gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, app.mvMatrix);

  var normalMatrix = mat3.create();
  mat4.toInverseMat3(app.mvMatrix, normalMatrix);
  mat3.transpose(normalMatrix);
  gl.uniformMatrix3fv(shaderProgram.nMatrixUniform, false, normalMatrix);
}

function lightIntesity( i, r, g, b){
  return [ i*r, i*g, i*b ];
}

function setUniforms(){
  gl.uniform3fv( shaderProgram.ambientColorUniform, lightIntesity( app.ambientIntensity, 0.3, 0.3, 0.3 ) );
  gl.uniform3fv( shaderProgram.lightSpecularColor, lightIntesity( 0.5, 1.0, 1.0, 1.0 ) );
  gl.uniform3fv( shaderProgram.lightDiffuseColor, lightIntesity( app.diffuseIntensity, 1.0, 1.0, 1.0 ) );
  gl.uniform1i( shaderProgram.hasFlashlight, app.hasFlashlight );
}

function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

function Array2Buffer(array, iSize, nSize) {
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(array), gl.STATIC_DRAW);
  buffer.itemSize = iSize;
  buffer.numItems = nSize;
  return buffer;
}

function Array2EBuffer(array, iSize, nSize) {
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(array), gl.STATIC_DRAW);
  buffer.itemSize = iSize;
  buffer.numItems = nSize;
  return buffer;
}

function drawBuffer(vpbuf, vcbuf, start, nitems, gltype) {
  gl.bindBuffer(gl.ARRAY_BUFFER, vpbuf);
  gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, vpbuf.itemSize, gl.FLOAT, false, 0, 0);
  gl.bindBuffer(gl.ARRAY_BUFFER, vcbuf);
  gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, vcbuf.itemSize, gl.FLOAT, false, 0, 0);
  setMatrixUniforms();
  gl.drawArrays(gltype, start, nitems);
}
