let w = 800;
let h = 800;
let num_balls = 30;
let balls = [];
let wind_str = 0.7;
let min_vel = 0.5;
let wind_height_mult = 5;
let impulse = false;

class Ball {
  constructor(pos) {
    this.pos = pos;
    this.start_pos = pos;
    this.vel = createVector(0, 0);
    this.radius = random(5, 10);
    this.bounce_mag = 0.7;
  }

  update(forces) {
    let acc = createVector(0, 0);

    for (let i = 0; i < forces.length; i++) {
      acc.add(forces[i]);
    }

    this.vel.add(acc);
    this.pos.add(this.vel);

    if (abs(this.vel.x) < min_vel) this.vel.x = 0;
    if (abs(this.vel.y) < min_vel) this.vel.y = 0;
  }

  draw() {
    circle(this.pos.x, this.pos.y, this.radius * 2);
  }

  get_floor_dist() {
    let d = h - (this.pos.y + this.radius);

    if (d < 0) this.pos.y = h - this.radius + 1;

    return d;
  }

  get_left_dist() {
    let d = this.pos.x - this.radius;
    if (d < 0) this.pos.x = this.radius;
    return d;
  }

  get_right_dist() {
    let d = w - (this.pos.x + this.radius);
    if (d < 0) this.pos.x = w - this.radius;
    return d;
  }
}

function setup() {
  createCanvas(w, h);

  for (let i = 0; i < num_balls; i++) {
    let x = random(w / 8, w - w / 8);
    let y = random(-h / 3, h / 3) + h / 2;
    let pos = createVector(x, y);
    let b = new Ball(pos);
    balls.push(b);
  }
}

function calculate_friction(ball) {
  let c = 0.1;
  let normal_force = 1;

  let friction_mag = c * normal_force;

  let f = ball.vel.copy();
  f.mult(-1);
  f.normalize();
  f.mult(friction_mag);
  return f;
}

function forces(b) {
  let forces = [];
  let floor_dist = b.get_floor_dist();
  let left_dist = b.get_left_dist();
  let right_dist = b.get_right_dist();

  let min_dist = min(floor_dist, left_dist, right_dist);

  if (floor_dist > 0) {
    let gravity = createVector(0, 1);
    forces.push(gravity);
  } else {
    let bounce = createVector(0, -b.vel.y + b.vel.y * -b.bounce_mag);
    forces.push(bounce);
  }

  if (left_dist < 1 || right_dist < 1) {
    let bounce = createVector(-b.vel.x + b.vel.x * -b.bounce_mag, 0);
    forces.push(bounce);
  }

  let t = millis() * 0.001;
  let wind_mag = map(noise(t), 0, 1, -wind_str, wind_str);
  wind_mag *= map(floor_dist, 0, h, 1, wind_height_mult);
  let wind = createVector(wind_mag, 0);
  forces.push(wind);

  if (min_dist < 1) {
    let friction = calculate_friction(b);
    forces.push(friction);
  }

  if (impulse) {
    let x = random(-5, 5);
    let y = random(-1, -20);
    let imp = createVector(x, y);
    forces.push(imp);
  }

  return forces;
}

function draw() {
  background(220);

  for (let i = 0; i < num_balls; i++) {
    let b = balls[i];
    b.update(forces(b));
    b.draw();
  }
  impulse = false;
}

function mousePressed() {
  impulse = true;
}
