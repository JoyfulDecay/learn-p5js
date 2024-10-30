let w = 800;
let h = 800;

let hue_values = [230, 60];

function setup() {
  createCanvas(w, h);
  noLoop();
}

function random_pixel_color() {
  let r_hue = random(hue_values);
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
