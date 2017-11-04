// WebGL context
var gl = {};
// the canvas element
var canvas = null;
// main shader program
var shaderProgram = null;
// main app object
var app = {};
app.meshes = {};
app.models = {};
app.mvMatrix = mat4.create();
app.mvMatrixStack = [];
app.pMatrix = mat4.create();

window.requestAnimFrame = (function (){
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (/* function FrameRequestCallback */ callback, /* DOMElement Element */ element){
            return window.setTimeout(callback, 1000 / 60);
        };
})();

function initWebGL(canvas){
    try{
        // Try to grab the standard context. If it fails, fallback to experimental.
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    }
    catch (e){
    }
    if (!gl){
        alert("Unable to initialize WebGL. Your browser may not support it.");
        gl = null;
    }
    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;
    gl.viewport(0, 0, canvas.width, canvas.height);
    return gl;
}

function getShader(gl, id){
    var shaderScript = document.getElementById(id);
    if (!shaderScript){
        return null;
    }

    var str = "";
    var k = shaderScript.firstChild;
    while (k){
        if (k.nodeType == 3){
            str += k.textContent;
        }
        k = k.nextSibling;
    }

    var shader;
    if (shaderScript.type == "x-shader/x-fragment"){
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (shaderScript.type == "x-shader/x-vertex"){
        shader = gl.createShader(gl.VERTEX_SHADER);
    } else{
        return null;
    }

    gl.shaderSource(shader, str);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
        alert(gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
}

function initShaders(){
    var fragmentShader = getShader(gl, "shader-fs");
    var vertexShader = getShader(gl, "shader-vs");

    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)){
        alert("Could not initialise shaders");
    }
    gl.useProgram(shaderProgram);

    shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    if (shaderProgram.vertexPositionAttribute != -1) {
        gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
    } else {
        console.warn('aVertexPosition not found in shader. Is it unused?');
    }

    shaderProgram.vertexNormalAttribute = gl.getAttribLocation(shaderProgram, "aVertexNormal");
    if (shaderProgram.vertexNormalAttribute != -1) {
        gl.enableVertexAttribArray(shaderProgram.vertexNormalAttribute);
    } else {
        console.warn('aVertexNormal not found in shader. Is it unused?');
    }

    shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
    if (shaderProgram.textureCoordAttribute != -1) {
        gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);
    } else {
        console.warn('aTextureCoord not found in shader. Is it unused?');
    }

    shaderProgram.diffuseAttribute = gl.getAttribLocation(shaderProgram, "aDiffuse");
    if (shaderProgram.diffuseAttribute != -1) {
        gl.enableVertexAttribArray(shaderProgram.diffuseAttribute);
    } else {
        console.warn('aDiffuse not found in shader. Is it unused?');
    }

    shaderProgram.specularAttribute = gl.getAttribLocation(shaderProgram, "aSpecular");
    if (shaderProgram.specularAttribute != -1) {
        gl.enableVertexAttribArray(shaderProgram.specularAttribute);
    } else {
        console.warn('aSpecular not found in shader. Is it unused?');
    }

    shaderProgram.specularExponentAttribute = gl.getAttribLocation(shaderProgram, "aSpecularExponent");
    if (shaderProgram.specularExponentAttribute != -1) {
        gl.enableVertexAttribArray(shaderProgram.specularExponentAttribute);
    } else {
        console.warn('aSpecularExponent not found in shader. Is it unused?');
    }

    shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
    shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
    shaderProgram.nMatrixUniform = gl.getUniformLocation(shaderProgram, "uNMatrix");

    shaderProgram.applyAttributePointers = function(layout) {
        if (shaderProgram.vertexPositionAttribute != -1) {
            var attr = layout.position;
            gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, attr.size, gl[attr.type], attr.normalized, attr.stride, attr.offset);
        }

        if (shaderProgram.vertexNormalAttribute != -1) {
            var attr = layout.normal;
            gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, attr.size, gl[attr.type], attr.normalized, attr.stride, attr.offset);
        }

        if (shaderProgram.textureCoordAttribute != -1) {
            if (model.mesh.textures.length){
                var attr = layout.uv;
                gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, attr.size, gl[attr.type], attr.normalized, attr.stride, attr.offset);
            } else{
                gl.disableVertexAttribArray(shaderProgram.textureCoordAttribute);
            }
        }

        if (shaderProgram.diffuseAttribute != -1) {
            var attr = layout.diffuse;
            gl.vertexAttribPointer(shaderProgram.diffuseAttribute, attr.size, gl[attr.type], attr.normalized, attr.stride, attr.offset);
        }

        if (shaderProgram.specularAttribute != -1) {
            var attr = layout.specular;
            gl.vertexAttribPointer(shaderProgram.specularAttribute, attr.size, gl[attr.type], attr.normalized, attr.stride, attr.offset);
        }

        if (shaderProgram.specularExponentAttribute != -1) {
            var attr = layout.specularExponent;
            gl.vertexAttribPointer(shaderProgram.specularExponentAttribute, attr.size, gl[attr.type], attr.normalized, attr.stride, attr.offset);
        }
    }
}

function drawObject(model){
    /*
     Takes in a model that points to a mesh and draws the object on the scene.
     Assumes that the setMatrixUniforms function exists
     as well as the shaderProgram has a uniform attribute called "samplerUniform"
     */
//    gl.useProgram(shaderProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, model.mesh.vertexBuffer);
    shaderProgram.applyAttributePointers(model.mesh.vertexBuffer.layout);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.mesh.indexBuffer);
    setMatrixUniforms();
    gl.drawElements(gl.TRIANGLES, model.mesh.indexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
}

function mvPushMatrix(){
    var copy = mat4.create();
    mat4.copy(copy, app.mvMatrix);
    app.mvMatrixStack.push(copy);
}

function mvPopMatrix(){
    if (app.mvMatrixStack.length === 0){
        throw "Invalid popMatrix!";
    }
    app.mvMatrix = app.mvMatrixStack.pop();
}

function setMatrixUniforms(){
    gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, app.pMatrix);
    gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, app.mvMatrix);

    var normalMatrix = mat3.create();
    mat3.normalFromMat4(normalMatrix, app.mvMatrix);
    gl.uniformMatrix3fv(shaderProgram.nMatrixUniform, false, normalMatrix);
}

function initBuffers(){
    var layout = new OBJ.Layout(
        OBJ.Layout.POSITION,
        OBJ.Layout.NORMAL,
        OBJ.Layout.DIFFUSE,
        OBJ.Layout.SPECULAR,
        OBJ.Layout.SPECULAR_EXPONENT);

    // initialize the mesh's buffers
    for (var mesh in app.meshes){
        // Create the vertex buffer for this mesh
        var vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        var vertexData = app.meshes[mesh].makeBufferData(layout)
        gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);
        vertexBuffer.numItems = vertexData.numItems;
        vertexBuffer.layout = layout;
        app.meshes[mesh].vertexBuffer = vertexBuffer;

        // Create the index buffer for this mesh
        var indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        var indexData = app.meshes[mesh].makeIndexBufferData()
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indexData, gl.STATIC_DRAW);
        indexBuffer.numItems = indexData.numItems;
        app.meshes[mesh].indexBuffer = indexBuffer;

        // this loops through the mesh names and creates new
        // model objects and setting their mesh to the current mesh
        app.models[mesh] = {};
        app.models[mesh].mesh = app.meshes[mesh];
    }
}

function animate(){
    app.timeNow = new Date().getTime();
    app.elapsed = app.timeNow - app.lastTime;
    if (!app.time) {
        app.time = 0.0;
    }
    app.time += app.elapsed / 1000.0;
    if (app.lastTime !== 0){
        // do animations
    }
    app.lastTime = app.timeNow;
}

function drawScene(){
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    mat4.perspective(app.pMatrix, 45 * Math.PI / 180.0, gl.viewportWidth / gl.viewportHeight, 0.01, 1000.0);
    mat4.identity(app.mvMatrix);
    // move the camera
    mat4.translate(app.mvMatrix, app.mvMatrix, [0, 0, -5]);
    mat4.rotate(app.mvMatrix, app.mvMatrix, app.time * 0.25 * Math.PI, [0, 1, 0]);
    // set up the scene
    mvPushMatrix();
        drawObject(app.models.suzanne);
    mvPopMatrix();
}

function tick(){
    requestAnimFrame(tick);
    drawScene();
    animate();
}

function webGLStart(meshes){
    app.meshes = meshes;
    canvas = document.getElementById('mycanvas');
    gl = initWebGL(canvas);
    initShaders();
    initBuffers();
    gl.clearColor(0.5, 0.5, 0.5, 1.0);
    gl.enable(gl.DEPTH_TEST);

    tick();
//    drawScene();
}

window.onload = function (){
    // OBJ.downloadMeshes({
    //     'suzanne': '/development/models/suzanne.obj'
    // }, webGLStart);
    let p = OBJ.downloadModels([
        {
            name: 'die',
            obj: '/development/models/die.obj',
            mtl: '/development/models/die.mtl',
        },
        {
            obj: '/development/models/suzanne.obj',
            mtl: true,
        }, // ,
        // {
            // obj: '/development/models/suzanne.obj'
        // }
    ]);

    p.then((models) => {
        for ([name, mesh] of Object.entries(models)) {
            console.log('Name:', name);
            console.log('Mesh:', mesh);
        }
        webGLStart(models);
    });
};
