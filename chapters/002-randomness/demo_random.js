let w = 800;
let h = 800;

function setup() {
  createCanvas(w, h);
  noLoop();
}

function random_pixel_color() {
  let r = random(255);
  return [r, r, r, 255];
}

function draw() {
  loadPixels();
  let num_pixels = pixels.length;

  for (let i = 0; i < num_pixels; i += 4) {
    let r = random_pixel_color();
    pixels[i] = r[0];
    pixels[i + 1] = r[1];
    pixels[i + 2] = r[2];
    pixels[i + 3] = r[3];
  }

  updatePixels();
}
