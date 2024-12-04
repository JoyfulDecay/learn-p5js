let canvas_size = 800;
let escape_mag = 2;
let max_iter = 500;
let c_range = 2;
let c_offset_x = -0.3;
let c_offset_y = 0;
let last_render_x;
let last_render_y;

let render_layer;

let current_pixel = 0;
let target_frame_time = 1000 / 60;

let ui_y = 810;
let render_button;
let c_offset_x_input;
let c_offset_y_input;
let c_range_input;
let max_iter_input;
let canvas_size_input;

let colours = [
  [120, 10, 10],
  [47, 100, 20],
  [170, 70, 70],
  [329, 80, 80],
  [106, 5, 10],
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
  noSmooth();
  colorMode(HSB);
  c_offset_x_input = createInput();
  c_offset_x_input.position(20, ui_y);

  c_offset_y_input = createInput();
  c_offset_y_input.position(200, ui_y);

  c_range_input = createInput();
  c_range_input.position(380, ui_y);

  max_iter_input = createInput();
  max_iter_input.size(40, 16);
  max_iter_input.position(560, ui_y);

  canvas_size_input = createInput();
  canvas_size_input.size(40, 16);
  canvas_size_input.position(610, ui_y);

  render_button = createButton("Render");
  render_button.position(700, ui_y);
  render_button.mousePressed(() => {
    read_inputs();
    start_render();
  });

  update_inputs();
  start_render();
}

function start_render() {
  createCanvas(canvas_size, canvas_size);
  render_layer = createGraphics(canvas_size, canvas_size);
  background(255);
  current_pixel = 0;
  last_render_x = c_offset_x;
  last_render_y = c_offset_y;
}

function update_inputs() {
  c_offset_x_input.value(c_offset_x);
  c_offset_y_input.value(c_offset_y);
  c_range_input.value(c_range);
  max_iter_input.value(max_iter);
  canvas_size_input.value(canvas_size);
}

function read_inputs() {
  c_offset_x = parseFloat(c_offset_x_input.value());
  c_offset_y = parseFloat(c_offset_y_input.value());
  c_range = parseFloat(c_range_input.value());
  max_iter = parseInt(max_iter_input.value());
  canvas_size = parseInt(canvas_size_input.value());
}

function mouseClicked() {
  if (mouseButton !== "left") return;

  if (mouseX < 0 || mouseY < 0 || mouseX > width || mouseY > height) return;

  c_offset_x = last_render_x + map(mouseX, 0, width, -c_range, c_range);
  c_offset_y = last_render_y + map(mouseY, 0, height, -c_range, c_range);

  update_inputs();
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

  while (current_pixel < width * height) {
    if (millis() - t0 > target_frame_time) break;

    let px = current_pixel % width;
    let py = floor(current_pixel / width);

    let z = new ComplexNumber(0, 0);

    let c_a = map(px, 0, width, -c_range, c_range);
    let c_b = map(py, 0, height, -c_range, c_range);

    c_a += c_offset_x;
    c_b += c_offset_y;

    let c = new ComplexNumber(c_a, c_b);

    let e = find_escape(z, c);

    let colour = e < 0 ? "black" : escape_colour(e, c, z);

    render_layer.stroke(colour);
    render_layer.point(px, py);

    current_pixel++;
  }

  image(render_layer, 0, 0, width, height);
}
