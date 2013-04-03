app.movement = {};
app.movement.current = {};
app.movement.current.px = 0;
app.movement.current.pz = 0;
app.movement.current.ry = 0;
app.movement.target = {};
app.movement.target.px = 0;
app.movement.target.pz = 0;
app.movement.target.ry = 0;
app.movement.speed = 25; //smaller faster

function updateMovement() {
  if (app.movement.current.pz > 1) {
    app.movement.current.pz -= 1;
    app.movement.target.pz -= 1;
    updateTunnel();
  }
  app.movement.target.pz += .1*app.elapsed/app.movement.speed;
  app.movement.current.pz = interpolate(app.movement.current.pz, app.movement.target.pz);
}

//target will keep moving past boundry
//tunnel update when current reaches boundry
//advance tunnel, save current x
//current will start behind boundry with angle, view and x offset
//target will adjust

function interpolate(f, t) {
  var speed = app.movement.speed;
  var x = t;
  if (Math.abs(f-t) < .1)
  x = t;
  else if (f>t)
    x = f - (f-t)/speed * app.elapsed;
  else if (f<t)
    x = f + (t-f)/speed * app.elapsed;
  return x;
}
