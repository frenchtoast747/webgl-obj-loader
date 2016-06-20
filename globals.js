// globals

// Enums
var X = 0, Y = 1, Z = 2, H = 3, P = 4;
// gl context
var gl;
// the canvas we're working with
var canvas;
// application var holder
var app = {};
  // mesh holder
  app.meshes = {};
  // model holder
  app.models = {};
  // this model has a single texture image,
  // so there is no need to have more than one
  // texture holder
  app.textures = {};
  // keyboard key ids
  app.keys = { W: 87, A: 65, S: 83, D: 68 };
  app.keys.pressed = {};
  for( key in app.keys ){
    app.keys.pressed[ app.keys[ key ] ] = false;
  }
  // camera
  app.camera = {};
  app.camera.position = [0,0.3,3.7];
  app.camera.inversePosition = vec3.create();
  app.camera.heading = 0;
  app.camera.pitch = 0;
  app.camera.walkSpeed = 0.001;
  app.camera.runSpeed = 0.002;
  app.camera.speed = app.camera.walkSpeed;
  app.camera.sensitivity = 10;
  app.camera.disable = false;
  app.camera.shake = false;
  app.camera.shakeTimer = 0;
  app.camera.shakeFrequency = 100;
  app.camera.shakeAmplitude = 0.01;
  // matrices
  app.elapsed = 0;
  // which function to use to draw
  app.drawScene;
  app.scenechange = false;
  // room light
  app.lightLocationStatic = [0,2,0];
  app.lightVectorStatic = [0,-1,0];
  app.lightLocation = vec3.create();
  app.lightVector = vec3.create();
  app.ambientIntensity = 0.5;
  app.diffuseIntensity = 2.0;
  app.hasFlashlight = false;
  app.mvMatrix = mat4.create();
  app.mvMatrixStack = [];
  app.pMatrix = mat4.create();
  // animation references
  app.lastTime = 0;
  app.elapsed = 0;
  // which function to use to draw
  app.drawScene;
  app.scenechange = false;
  // particles
  app.particles = {};
  app.particles.min = [-0.5,0.3,-0.1];
  app.particles.max = [0.5,0.7,0.1];
  app.particles.maxVector = 1;
  app.particles.TTL = 1;
  app.particles.rate = 1000; // current time rate ( real time vs slow mo )
  // monkey
  app.monkey = {};
  app.monkey.position = [0,0,0]
  // boulder
  app.boulder = {};
  app.boulder.position = [0,0.245,-2.21];
  app.boulder.rotation = 0;
  // animations
  app.animate = false;
  app.animations = {};
  app.animations.currentAnimation = 0;
    // move to the monkey
    app.animations.moveToMonkeyTime = 2; // framelength in seconds
    app.animations.moveToMonkeyStartTime = 0;
    app.animations.moveToMonkeyStartPosition = [];
    app.animations.moveToMonkeyStartHeadingPitch = [];
    app.animations.moveToMonkeyEndPosition = [0,0.3,0.3];
    // take the monkey
    app.animations.takeMonkeyTime = 1; // framelength in seconds
    app.animations.takeMonkeyStartTime = 0;
    app.animations.takeMonkeyStartPosition = [];
    app.animations.takeMonkeyEndPosition = [0,0,-0.2];
    // walls
    app.breakWalls = false;
    app.wallScale = 1;
    app.animations.boulderCrashStartTime = 0;
    // turn around
    app.animations.turnAroundTime = 1; // framelength in seconds
    app.animations.turnAroundStartTime = 0;

var shaderProgram;
var particleShaderProgram;
var light = 0;
var angle = 0;
