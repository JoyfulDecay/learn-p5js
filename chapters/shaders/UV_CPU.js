let w = 800;
let h = 800;

let render_layer;
let render_size = 10;

let current_pixel = 0;
let target_frame_time = 1000 / 60;

function setup() {
  createCanvas(w, h);
  render_layer = createGraphics(render_size, render_size);
  noSmooth();
}

function draw() {
  let t0 = millis();

  while (current_pixel < render_size * render_size) {
    if (millis() - t0 > target_frame_time) break;

    let px = current_pixel % render_size;
    let py = floor(current_pixel / render_size);

    let pr = map(px, 0, render_size, 0, 255);
    let pg = map(py, 0, render_size, 0, 255);
    let pb = 0;

    render_layer.stroke(pr, pg, pb, 255);
    render_layer.point(px, py);

    current_pixel++;
  }

  image(render_layer, 0, 0, w, h);
}
