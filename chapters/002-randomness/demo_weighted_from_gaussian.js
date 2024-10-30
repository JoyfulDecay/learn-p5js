let w = 800;
let h = 800;

let hue_choice;

class GaussianWeightedChoice {
  constructor(dev) {
    this.values = [];
    this.weights = [];
    this.dev = dev;
  }

  add_value(value, weight) {
    this.values.push(value);
    this.weights.push(weight);
  }

  select_value() {
    let weight_sum = [];

    for (let i = 0; i < this.values.length; i++) {
      weight_sum[i] = this.weights[i];

      if (i > 0) weight_sum[i] += weight_sum[i - 1];
    }

    let max_weight = weight_sum[weight_sum.length - 1];

    let choice = weight_sum.length - 1;
    let r = random(max_weight);

    for (let i = 0; i < weight_sum.length - 1; i++) {
      if (r < weight_sum[i]) {
        choice = i;
        break;
      }
    }

    let mean = this.values[choice];

    return randomGaussian(mean, this.dev);
  }
}

function random_pixel_color() {
  let r_hue = hue_choice.select_value();
  colorMode(HSB);
  let c = color(r_hue, 100, 100);

  let r = red(c);
  let g = green(c);
  let b = blue(c);

  return [r, g, b, 255];
}

function setup() {
  createCanvas(w, h);
  noLoop();
  hue_choice = new GaussianWeightedChoice(20);
  hue_choice.add_value(0, 1);
  hue_choice.add_value(260, 0.5);
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
