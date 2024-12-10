let w = 800;
let h = 800;

let render_layer;
let render_size = 800;

let current_pixel = 0;

function setup() {
  createCanvas(w, h);
  render_layer = createGraphics(render_size, render_size);
  noLoop();
  noSmooth();
}

function draw() {
  let t0 = millis();

  let num_pixels = render_layer.width * render_layer.height;

  while (current_pixel < num_pixels) {
    let px = current_pixel % render_layer.width;
    let py = floor(current_pixel / render_layer.width);

    let pr = map(px, 0, render_layer.width, 0, 255);
    let pg = map(py, 0, render_layer.height, 0, 255);
    let pb = 0;

    render_layer.fill(pr, pg, pb, 255);
    render_layer.noStroke();
    render_layer.rect(px, py, 1, 1);

    current_pixel++;
  }

  let elapsed_time = millis() - t0;
  console.log(`Render took ${elapsed_time} millis.`);

  image(render_layer, 0, 0, w, h);
}
