// webgl.js

  var gl, ball;

  function initGL(canvas) {
      try {
          gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");;
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


  var shaderProgram;

  function initShaders() {
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

      shaderProgram.vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
      gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);

      shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
      shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
  }


  var mvMatrix = mat4.create();
  var mvMatrixStack = [];
  var pMatrix = mat4.create();

  function mvPushMatrix() {
      var copy = mat4.create();
      mat4.set(mvMatrix, copy);
      mvMatrixStack.push(copy);
  }

  function mvPopMatrix() {
      if (mvMatrixStack.length == 0) {
          throw "Invalid popMatrix!";
      }
      mvMatrix = mvMatrixStack.pop();
  }


  function setMatrixUniforms() {
      gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
      gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
  }


  function degToRad(degrees) {
      return degrees * Math.PI / 180;
  }

  var modelVertexPositionBuffer;
  var cubeVertexColorBuffer;
  var modelVertexIndexBuffer;

  function initBuffers() {
      modelVertexPositionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, modelVertexPositionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ball.verts), gl.STATIC_DRAW);
      modelVertexPositionBuffer.itemSize = 3;
      modelVertexPositionBuffer.numItems = ball.verts.length / modelVertexPositionBuffer.itemSize;

      modelVertexIndexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, modelVertexIndexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(ball.vertexIndexArray), gl.STATIC_DRAW);
      modelVertexIndexBuffer.itemSize = 1;
      modelVertexIndexBuffer.numItems = ball.vertexIndexArray.length;
  }


  var rPyramid = 0;
  var rCube = 0;

  function drawScene() {
      gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);


      // you might want to pick a different view
      mat4.lookAt([.2, 0.5, 2], [0, 0, 0], [0, 1, 0], mvMatrix);

      mat4.translate(mvMatrix, [0.0, 0.0, -7.0]);

      mvPushMatrix();
      mat4.rotate(mvMatrix, degToRad(rCube), [1, 1, 1]);

      gl.bindBuffer(gl.ARRAY_BUFFER, modelVertexPositionBuffer);
      gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, modelVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, modelVertexIndexBuffer);
      setMatrixUniforms();
      gl.drawElements(gl.TRIANGLES, modelVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);

      mvPopMatrix();

  }


  var lastTime = 0;

  function animate() {
      var timeNow = new Date().getTime();
      if (lastTime != 0) {
          var elapsed = timeNow - lastTime;

          rPyramid += (90 * elapsed) / 1000.0;
          rCube -= (75 * elapsed) / 1000.0;
      }
      lastTime = timeNow;
  }


  function tick() {
      requestAnimFrame(tick);
      drawScene();
      animate();
  }


  function webGLStart() {
      ball = new Mesh( 'ball' );
      var canvas = document.getElementById("mycanvas");
      initGL(canvas);
      initShaders()
      initBuffers();

      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.enable(gl.DEPTH_TEST);

      tick();
  }