let balls = [];
let num_balls = 1000;
let active_balls;
let w = 800;
let h = 800;
let spawn_radius = 375;
let spawn_rand = 0.1;
let grav_str = 7;
let min_dist = 7;
let trails;

//let num_frames = -1; //no limit
let num_frames = 60 * 60; //one minute

class Ball {
  constructor(pos, h) {
    this.pos = pos;
    this.vel = createVector(0, 0);
    this.radius = 5;
    this.h = h;
    this.mass = 10;
  }

  update(forces) {
    for (let i = 0; i < forces.length; i++) {
      this.vel.add(forces[i]);
    }

    this.pos.add(this.vel);
  }

  draw() {
    colorMode(HSB);
    fill(this.h, 255, 255);
    circle(this.pos.x, this.pos.y, this.radius * 2);
  }
}

function setup() {
  createCanvas(w, h);

  trails = createGraphics(w, h);
  trails.clear();

  let offset = createVector(spawn_radius, 0);
  for (let i = 0; i < num_balls; i++) {
    let pos = createVector(w / 2, h / 2);
    offset.rotate((2 * PI) / num_balls);
    pos.add(offset);

    let rand_x = random(-spawn_rand, spawn_rand);
    let rand_y = random(-spawn_rand, spawn_rand);
    pos.add(createVector(rand_x, rand_y));

    let rand_hue = (360 / num_balls) * i;
    let b = new Ball(pos, rand_hue);
    balls.push(b);
  }
  active_balls = num_balls;
}

function attraction(b1, b2_pos) {
  let f = b2_pos.copy();
  f.sub(b1.pos);

  let dist = p5.Vector.dist(b1.pos, b2_pos);

  dist = max(dist, min_dist);

  let mag = grav_str / (dist * dist);

  f.normalize();

  f.mult(mag);

  return f;
}

function forces(ball_index, old_balls) {
  let forces = [];
  let b = balls[ball_index];

  for (let i = 0; i < balls.length; i++) {
    if (i == ball_index) continue;

    let other_pos = old_balls[i];

    let f = attraction(b, other_pos);

    forces.push(f);
  }

  return forces;
}

function draw() {
  if (num_frames != -1 && frameCount >= num_frames) {
    noLoop();
    return;
  }

  background(0);

  image(trails, 0, 0);

  let old_balls = balls.map((b) => b.pos.copy());

  for (let i = 0; i < active_balls; i++) {
    let b = balls[i];

    let x0 = b.pos.x;
    let y0 = b.pos.y;

    b.update(forces(i, old_balls));
    b.draw();

    trails.colorMode(HSB);
    trails.stroke(b.h, 255, 255);
    trails.line(x0, y0, b.pos.x, b.pos.y);
  }
}

function mousePressed() {
  if (mouseButton != LEFT) return;

  if (active_balls > 0) active_balls = 0;
  else active_balls = num_balls;
}
