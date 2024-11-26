let w = 800;
let h = 800;
let num_balls = 10;
let balls = [];

class Ball {
  constructor(pos) {
    this.pos = pos;
    this.start_pos = pos;
    this.vel = createVector(0, 0);
    this.radius = 10;
    this.bounce_mag = 0.7;
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
    circle(this.pos.x, this.pos.y, this.radius * 2);
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

function edge_dist(b) {
  let edges = createVector(0, 0);

  edges.y = h - (b.pos.y + b.radius);

  return edges;
}

function forces(b) {
  let forces = [];
  let edges = edge_dist(b);

  if (edges.y > 1) {
    let gravity = createVector(0, 1);
    forces.push(gravity);
  } else {
    let bounce = createVector(0, b.vel.y * -b.bounce_mag);
    forces.push(bounce);
    b.pos.y = h - b.radius;
    b.vel.y = 0;
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
}
