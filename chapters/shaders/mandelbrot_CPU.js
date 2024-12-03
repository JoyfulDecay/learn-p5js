let w = 4096;
let h = 4096;

let escape_mag = 2;
let max_iter = 500;
let c_min = -2;
let c_max = 1.7;
let c_offset_x = -0.3;
let c_offset_y = 0;

let render_layer;
let render_size = 4096;

let current_pixel = 0;
let target_frame_time = 1000 / 60;

let colours = [
  [12, 0, 100],
  [47, 100, 90],
  [170, 30, 77],
  [329, 20, 80],
  [266, 100, 20],
];

class ComplexNumber {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  mag() {
    return sqrt(this.a * this.a + this.b * this.b);
  }

  add(c) {
    this.a += c.a;
    this.b += c.b;
  }

  pow2() {
    let c0 = new ComplexNumber(this.a, this.b);

    this.a = pow(c0.a, 2) - pow(c0.b, 2);
    this.b = 2 * c0.a * c0.b;
  }
}

function setup() {
  createCanvas(w, h);
  render_layer = createGraphics(render_size, render_size);
  noSmooth();
  colorMode(HSB);
}

function find_escape(z, c) {
  for (let i = 0; i < max_iter; i++) {
    z.pow2();
    z.add(c);

    if (z.mag() > escape_mag) return i;
  }
  return -1;
}

function escape_colour(n, c, z) {
  let mu = max_iter - n - log(log(z.mag())) / log(2);
  let num_colours = colours.length;
  let colour = map(mu, 0, max_iter, 0, num_colours - 1);
  let c0 = color(...colours[floor(colour)]);
  let c1 = color(...colours[floor(max(colour, num_colours - 1))]);
  return lerpColor(c0, c1, colour % 1);
}

function draw() {
  let t0 = millis();

  while (current_pixel < render_size * render_size) {
    if (millis() - t0 > target_frame_time) break;

    let px = current_pixel % render_size;
    let py = floor(current_pixel / render_size);

    let z = new ComplexNumber(0, 0);

    let c_a = map(px, 0, render_size, c_min, c_max) + c_offset_x;
    let c_b = map(py, 0, render_size, c_min, c_max) + c_offset_y;

    let c = new ComplexNumber(c_a, c_b);

    let e = find_escape(z, c);

    let colour = e < 0 ? "black" : escape_colour(e, c, z);

    render_layer.stroke(colour);
    render_layer.point(px, py);

    current_pixel++;
  }

  image(render_layer, 0, 0, w, h);
}
