function initGL(canvas) {
  try {
    gl = canvas.getContext("experimental-webgl");
    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;
  } catch (e) {
  }
  if (!gl) {
    alert("Could not initialise WebGL, sorry :-(");
  }
}

function getShader(gl, id) {
  var shaderScript = document.getElementById(id);
  if (!shaderScript) {
    return null;
  }

  var str = "";
  var k = shaderScript.firstChild;
  while (k) {
    if (k.nodeType == 3) {
      str += k.textContent;
    }
    k = k.nextSibling;
  }

  var shader;
  if (shaderScript.type == "x-shader/x-fragment") {
    shader = gl.createShader(gl.FRAGMENT_SHADER);
  } else if (shaderScript.type == "x-shader/x-vertex") {
    shader = gl.createShader(gl.VERTEX_SHADER);
  } else {
    return null;
  }

  gl.shaderSource(shader, str);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(gl.getShaderInfoLog(shader));
    return null;
  }

  return shader;
}

function initShaders() {
  initParticleShaders();
  
  var fragmentShader = getShader(gl, "shader-fs");
  var vertexShader = getShader(gl, "shader-vs");

  shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert("Could not initialise shaders");
  }

  gl.useProgram(shaderProgram);

  shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
  gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

  shaderProgram.vertexNormalAttribute = gl.getAttribLocation(shaderProgram, "aVertexNormal");
  gl.enableVertexAttribArray(shaderProgram.vertexNormalAttribute);

  shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
  gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);

  shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
  shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
  shaderProgram.nMatrixUniform = gl.getUniformLocation(shaderProgram, "uNMatrix");
  shaderProgram.samplerUniform = gl.getUniformLocation(shaderProgram, "uSampler");
  shaderProgram.modelColor = gl.getUniformLocation(shaderProgram, "uColor");
  shaderProgram.materialShininessUniform = gl.getUniformLocation(shaderProgram, "uMaterialShininess");
  shaderProgram.useTexturesUniform = gl.getUniformLocation(shaderProgram, "uUseTextures");
  shaderProgram.ambientColorUniform = gl.getUniformLocation(shaderProgram, "uAmbientColor");
  shaderProgram.hasTexure = gl.getUniformLocation(shaderProgram, "uHasTexure");
  shaderProgram.hasFlashlight = gl.getUniformLocation(shaderProgram, "uHasFlashlight");
  shaderProgram.lightLocation = gl.getUniformLocation(shaderProgram, "uLightLocation");
  shaderProgram.lightVector = gl.getUniformLocation(shaderProgram, "uSpotDirection");
  shaderProgram.lightSpecularColor = gl.getUniformLocation(shaderProgram, "uLightSpecularColor");
  shaderProgram.lightDiffuseColor = gl.getUniformLocation(shaderProgram, "uLightDiffuseColor");
}

function initParticleShaders() {
  var fragmentShader = getShader(gl, "particle-shader-fs");
  var vertexShader = getShader(gl, "particle-shader-vs");

  particleShaderProgram = gl.createProgram();
  gl.attachShader(particleShaderProgram, vertexShader);
  gl.attachShader(particleShaderProgram, fragmentShader);
  gl.linkProgram(particleShaderProgram);

  if (!gl.getProgramParameter(particleShaderProgram, gl.LINK_STATUS)) {
    alert("Could not initialise shaders");
  }
  
  particleShaderProgram.particlePosition = gl.getAttribLocation(particleShaderProgram, "aParticlePosition");
  gl.enableVertexAttribArray(particleShaderProgram.particlePosition);
  
  particleShaderProgram.particleVector = gl.getAttribLocation(particleShaderProgram, "aParticleVector");
  gl.enableVertexAttribArray(particleShaderProgram.particleVector);
  
  particleShaderProgram.particleTTL = gl.getAttribLocation(particleShaderProgram, "aParticleTTL");
  gl.enableVertexAttribArray(particleShaderProgram.particleTTL);
  
  particleShaderProgram.time = gl.getUniformLocation(particleShaderProgram, "time");
  particleShaderProgram.samplerUniform = gl.getUniformLocation(particleShaderProgram, "uSampler");
  particleShaderProgram.pMatrixUniform = gl.getUniformLocation(particleShaderProgram, "uPMatrix");
  particleShaderProgram.mvMatrixUniform = gl.getUniformLocation(particleShaderProgram, "uMVMatrix");
}

function handleLoadedTexture(texture) {
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image );
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.MIRRORED_REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);
  gl.generateMipmap(gl.TEXTURE_2D);

  gl.bindTexture(gl.TEXTURE_2D, null);
}

function initTexture( object, url) {
  object.texture = gl.createTexture();
  object.texture.image = new Image();
  object.texture.image.crossOrigin = "anonymous";
  object.texture.image.onload = function () {
    handleLoadedTexture( object.texture );
  }
  object.texture.image.src = url;
}

function initTextures(){
  initTexture( app.models.room_ceiling, "/textures/stony_ground.jpg" );
  initTexture( app.models.room_walls, "/textures/stone_wall.png" );
  initTexture( app.models.room_floor, "/textures/room_floor.jpg" );
  app.models.room_tunnel_walls.texture = app.models.room_walls.texture;
  app.models.room_wall_broken.texture = app.models.room_walls.texture;
  app.models.room_wall_unbroken.texture = app.models.room_walls.texture;
  app.models.room_tunnel_ceiling.texture = app.models.room_ceiling.texture;
  app.models.boulder.texture = app.models.room_ceiling.texture;
  initTexture( app.particles, "/textures/smoke.png" );
}

function initMeshBuffers( mesh ) {
  /*
    Takes in a Mesh then creates and appends the buffers
    to the mesh object.

    The new mesh attributes are:
      mesh.normalBuffer   contains the model's Vertex Normals
        mesh.normalBuffer.itemSize  set to 3 items
        mesh.normalBuffer.numItems  the total number of vertex normals

      mesh.textureBuffer  contains the model's Texture Coordinates
        mesh.textureBuffer.itemSize set to 2 items
        mesh.textureBuffer.numItems the number of texture coordinates

      mesh.vertexBuffer   contains the model's Vertex Position Coordinates (does not include w)
        mesh.vertexBuffer.itemSize  set to 3 items
        mesh.vertexBuffer.numItems  the total number of vertices

      mesh.indexBuffer    contains the indices of the for the faces
                          These are to be used with gl.drawElements()
                          and gl.TRIANGLES
        mesh.indexBuffer.itemSize   is set to 1
        mesh.indexBuffer.numItems   the total number of indices
  */
  mesh.normalBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, mesh.normalBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.vertexNormals), gl.STATIC_DRAW);
  mesh.normalBuffer.itemSize = 3;
  mesh.normalBuffer.numItems = mesh.vertexNormals.length / 3;

  mesh.textureBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, mesh.textureBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.textures), gl.STATIC_DRAW);
  mesh.textureBuffer.itemSize = 2;
  mesh.textureBuffer.numItems = mesh.textures.length / 2;

  mesh.vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, mesh.vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.vertices), gl.STATIC_DRAW);
  mesh.vertexBuffer.itemSize = 3;
  mesh.vertexBuffer.numItems = mesh.vertices.length / 3;

  mesh.indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(mesh.indices), gl.STATIC_DRAW);
  mesh.indexBuffer.itemSize = 1;
  mesh.indexBuffer.numItems = mesh.indices.length;
}

function initBuffers() {
  // initialize the mesh's buffers
  for( mesh in app.meshes ){
    initMeshBuffers( app.meshes[ mesh ] );
    // this loops through the mesh names and creates new
    // model objects and setting their mesh to the current mesh
    app.models[ mesh ] = {};
    app.models[ mesh ].mesh = app.meshes[ mesh ];
  }
  app.models.skylight = {};
  app.models.skylight.mesh = app.models.room_floor.mesh;
  createParticles( 100000, app.particles.min, app.particles.max, app.particles.maxVector, app.particles.TTL, app.particles );
}
