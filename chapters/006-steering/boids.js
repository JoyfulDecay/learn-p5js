let bodies = [];
let num_bodies = 200;
let w = 800;
let h = 800;
let spawn_radius = 200;
let spawn_rand = 0.1;
let min_dist = 7;
let perception_radius = 30;

let sep_mag = 0.23;
let coh_mag = 0.25;
let ali_mag = 0.2;

class Body {
  constructor({ pos, vel = createVector(0, 0), radius = 3, h }) {
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
    pos.mult(random(0, 1));
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

function friction(b) {
  let c = 0.25;
  let normal_force = 1;

  let friction_mag = c * normal_force;

  let f = b.vel.copy();
  f.mult(-1);
  f.normalize();
  f.mult(friction_mag);
  return f;
}

function edge_repel(b) {
  let f = createVector(0, 0);
  let mag = 1;

  if (b.pos.x < -w / 2) f.add(createVector(1, 0));
  if (b.pos.x > w / 2) f.add(createVector(-1, 0));

  if (b.pos.y < -h / 2) f.add(createVector(0, 1));
  if (b.pos.y > h / 2) f.add(createVector(0, -1));

  f.mult(mag);

  return f;
}

function separation(b_index, old_bodies) {
  return createVector(0, 0);
}

function forces(b_index, old_bodies) {
  let forces = [];
  let b = old_bodies[b_index];

  let local_flock_size = 0;
  let local_average_pos = createVector(0, 0);
  let local_average_vel = createVector(0, 0);

  for (let i = 0; i < old_bodies.length; i++) {
    if (i == b_index) continue;

    let b2 = old_bodies[i];

    let d = b.pos.dist(b2.pos);

    if (d > perception_radius) continue;

    local_average_pos.add(b2.pos);
    local_average_vel.add(b2.vel);
    local_flock_size++;
  }

  if (local_flock_size > 0) {
    local_average_pos.div(local_flock_size);
    local_average_vel.div(local_flock_size);

    let sep = p5.Vector.sub(b.pos, local_average_pos);
    sep.normalize();
    sep.mult(sep_mag);
    forces.push(sep);

    let alignment = local_average_vel.copy();
    alignment.normalize();
    alignment.mult(ali_mag);
    forces.push(alignment);

    let cohesion = p5.Vector.mult(sep, -1);
    cohesion.normalize();
    cohesion.mult(coh_mag);
    forces.push(cohesion);
  }

  forces.push(edge_repel(b));

  forces.push(friction(b));

  return forces;
}

function draw() {
  //center sketch on middle
  translate(w / 2, h / 2);

  if (frameCount != 1) background(0);

  //copy old reference frame and create new one
  let old_bodies = bodies;
  bodies = [];

  for (let i = 0; i < num_bodies; i++) {
    let b = old_bodies[i].copy();
    b.update(forces(i, old_bodies));
    b.draw();
    bodies.push(b);
  }
}
