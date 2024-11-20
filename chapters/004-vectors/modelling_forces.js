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
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  draw() {
    circle(this.pos.x, this.pos.y, 10);
  }

  addForce(f) {
    this.acc.add(f);
  }
}

function setup() {
  createCanvas(w, h);

  for (let i = 0; i < num_balls; i++) {
    let pos = createVector(random(w), random(h));
    let b = new Ball(pos);
    balls.push(b);

    let rand_force = createVector(random(-1, 1), random(-1, 1));
    rand_force.normalize();
    rand_force.mult(random(1, 6));
    b.addForce(rand_force);
  }
}

function draw() {
  background(220);

  for (let i = 0; i < num_balls; i++) {
    let b = balls[i];
    b.update();
    b.draw();
  }
}
