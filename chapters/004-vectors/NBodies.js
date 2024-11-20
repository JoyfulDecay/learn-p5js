let balls = [];
let num_balls = 3;
let w = 800;
let h = 800;
let spawn_radius = 300;
let grav_str = 100;
let trails;

class Ball {
  constructor(pos, h) {
    this.pos = pos;
    this.vel = createVector(0, 0);
    this.radius = 12;
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

  for (let i = 0; i < num_balls; i++) {
    let pos = createVector(w / 2, h / 2);
    pos.x += random(-spawn_radius, spawn_radius);
    pos.y += random(-spawn_radius, spawn_radius);

    let rand_hue = (360 / num_balls) * i;
    let b = new Ball(pos, rand_hue);
    balls.push(b);
  }
}

function attraction(b1, b2_pos) {
  let f = b2_pos.copy();
  f.sub(b1.pos);

  let dist = p5.Vector.dist(b1.pos, b2_pos);

  dist = max(dist, b1.radius * 2);

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
  background(0);

  image(trails, 0, 0);

  let old_balls = balls.map((b) => b.pos.copy());

  for (let i = 0; i < num_balls; i++) {
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
