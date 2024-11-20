let w = 800;
let h = 800;
let num_balls = 10;
let balls = [];

class Ball {
  constructor(pos) {
    this.pos = pos;
    this.start_pos = pos;
    this.vel = createVector(0, 0);
  }

  update(forces) {
    let acc = createVector(0, 0);

    for (let i = 0; i < forces.length; i++) {
      acc.add(forces[i]);
    }

    this.vel.add(acc);
    this.pos.add(this.vel);
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
    let x = random(w / 8, w - w / 8);
    let y = random(-h / 3, h / 3) + h / 2;
    let pos = createVector(x, y);
    let b = new Ball(pos);
    balls.push(b);
  }
}

function forces(b) {
  let forces = [];

  let gravity = createVector(0, 1);

  return [gravity];
}

function draw() {
  background(220);

  for (let i = 0; i < num_balls; i++) {
    let b = balls[i];
    b.update(forces(b));
    b.draw();
  }
}
