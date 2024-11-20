let w = 400;
let h = 400;

let grid_size = 10;
let circle_size = 10;

let friction = 0.99;

let num_balls = 10;
let balls = [];

class Ball {
  constructor() {
    this.x = random(w);
    this.y = random(h);
    this.vel_x = random(-10, 10);
    this.vel_y = random(-10, 10);
  }

  update() {
    this.x = (w + this.x + this.vel_x) % w;
    this.y = (h + this.y + this.vel_y) % h;

    this.vel_x *= friction;
    this.vel_y *= friction;
  }

  draw() {
    fill("red");
    circle(this.x, this.y, circle_size);
  }
}

function setup() {
  createCanvas(w, h);

  for (let i = 0; i < num_balls; i++) {
    let b = new Ball();
    balls.push(b);
  }
}

function draw_wind(x, y, r_w, r_h) {
  //background
  fill(200);
  rect(x, y, r_w, r_h);

  let origin_x = x + r_w / 2;
  let origin_y = y + r_h / 2;
  circle(origin_x, origin_y, 3);

  let noise_x = x * 0.0001;
  let noise_y = y * 0.0001;

  noiseSeed(123);
  let radius = 10; //noise(noise_x, noise_y) * 20;

  noiseSeed(456);
  let angle = noise(noise_x, noise_y) * 360;

  let x2 = origin_x + radius * cos(angle);
  let y2 = origin_y + radius * sin(angle);
  line(origin_x, origin_y, x2, y2);
}

function draw() {
  background(220);

  for (let i = 0; i < grid_size; i++) {
    for (let j = 0; j < grid_size; j++) {
      let r_w = w / grid_size;
      let r_h = h / grid_size;
      let x = r_w * i;
      let y = r_h * j;
      draw_wind(x, y, r_w, r_h);
    }
  }

  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.update();
    b.draw();
  }
}
