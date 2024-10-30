let w = 800;
let h = 800;

let num_peaks = 2;
let dev = 0.01;

function setup() {
  createCanvas(w, h);
  noLoop();
}
//n = num_peaks - 0 will error
function multi_gaussian(n, deviation) {
  let mean = floor(random(n)) + 0.5;
  return randomGaussian(mean, deviation) / n;
}

function random_pixel_color() {
  let r_hue = map(multi_gaussian(num_peaks, dev), 0, 1, 0, 360);
  colorMode(HSB);
  let c = color(r_hue, 100, 100);

  let r = red(c);
  let g = green(c);
  let b = blue(c);

  return [r, g, b, 255];
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
