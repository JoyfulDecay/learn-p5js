let w = 800;
let h = 800;
let num_balls = 10;
let balls = [];

class Ball {
  constructor(pos) {
    this.pos = pos;
    this.start_pos = pos;
    this.acc = createVector(0, 0);
    this.vel = createVector(0, 0);
    this.mass = 1;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  draw() {
    circle(this.pos.x, this.pos.y, 10);
  }

  add_force(f) {
    this.acc.add(f);
  }
}

function setup() {
  createCanvas(w, h);

  for (let i = 0; i < num_balls; i++) {
    let pos = createVector(w / 2, h / 2);
    let b = new Ball(pos);
    balls.push(b);

    let rand_force = createVector(random(-1, 1), random(-1, 1));
    rand_force.normalize();
    rand_force.mult(random(1, 10));
    b.add_force(rand_force);
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

function draw() {
  background(220);

  for (let i = 0; i < num_balls; i++) {
    let b = balls[i];

    b.add_force(calculate_friction(b));

    b.update();
    b.draw();
  }
}
