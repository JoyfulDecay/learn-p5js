let bodies = [];
let num_bodies = 12;
let w = 800;
let h = 800;
let spawn_radius = 100;
let spawn_rand = 0.1;
let grav_str = 100;
let min_dist = 7;

class Body {
  constructor({ pos, vel = createVector(0, 0), radius = 5, h }) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.h = h;
  }

  update(forces) {
    for (let i = 0; i < forces.length; i++) {
      this.vel.add(forces[i]);
    }

    this.pos.add(this.vel);
  }

  draw() {
    noStroke();
    colorMode(HSB);
    fill(this.h, 255, 255);
    circle(this.pos.x, this.pos.y, this.radius * 2);
  }

  copy() {
    return new Body({
      pos: this.pos.copy(),
      vel: this.vel.copy(),
      radius: this.radius,
      h: this.h,
    });
  }
}

function setup() {
  createCanvas(w, h);

  trails = createGraphics(w, h);
  trails.clear();

  let offset = createVector(spawn_radius, 0);
  for (let i = 0; i < num_bodies; i++) {
    let pos = createVector(0, 0);
    offset.rotate((2 * PI) / num_bodies);
    pos.add(offset);
    pos.x += random(-spawn_rand, spawn_rand);
    pos.y += random(-spawn_rand, spawn_rand);

    let b_hue = (360 / num_bodies) * i;
    let b = new Body({
      pos: pos,
      h: b_hue,
    });
    bodies.push(b);
  }
}

function attraction(b1, b2) {
  let f = b2.pos.copy();
  f.sub(b1.pos);

  let dist = p5.Vector.dist(b1.pos, b2.pos);

  dist = max(dist, min_dist);

  let mag = grav_str / (dist * dist);

  f.normalize();
  f.mult(mag);
  return f;
}

function friction(b) {
  let c = 0.01;
  let normal_force = 1;

  let friction_mag = c * normal_force;

  let f = b.vel.copy();
  f.mult(-1);
  f.normalize();
  f.mult(friction_mag);
  return f;
}

function edge_repel(b) {
  let f = b.pos.copy();

  let d = b.pos.magSq() / (w * w + h * h);

  f.normalize();
  f.mult(-d);
  return f;
}

function forces(b_index, old_bodies) {
  let forces = [];
  let b = old_bodies[b_index];

  for (let i = 0; i < old_bodies.length; i++) {
    if (i == b_index) continue;

    let b2 = old_bodies[i];

    forces.push(attraction(b, b2));
  }

  forces.push(edge_repel(b));

  forces.push(friction(b));

  return forces;
}

function draw() {
  //center sketch on middle
  translate(w / 2, h / 2);

  background(255, 0.001);

  let old_bodies = bodies;
  bodies = [];

  for (let i = 0; i < num_bodies; i++) {
    let b = old_bodies[i].copy();
    b.update(forces(i, old_bodies));
    b.draw();
    bodies.push(b);
  }
}