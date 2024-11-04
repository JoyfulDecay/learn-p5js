let w = 800;
let h = 800;

let img;
let img_scale = 8;
let img_w = w / img_scale;
let img_h = h / img_scale;
let img_buffer_size = img_w * img_h * 4;

let noise_range = 1;
let noise_range_slider;
let noise_range_min = 0.01;
let noise_range_max = 20;

function setup() {
  createCanvas(w, h);
  img = createImage(img_w, img_h);
  noSmooth();

  noise_range_slider = createSlider(
    noise_range_min,
    noise_range_max,
    noise_range_max,
    0,
  );
  noise_range_slider.position(10, 10);
  noise_range_slider.size(780);

  noiseDetail(100, 0.5);
}

function draw() {
  noise_range = noise_range_slider.value();

  img.loadPixels();

  let t = frameCount * 0.01;

  for (let i = 0; i < img_buffer_size; i += 4) {
    //texture coordinates of current pixel
    let pixel = i / 4;
    let p_x = pixel % img_w;
    let p_y = floor(pixel / img_h);

    //noise coordinates with scaling applied
    let x = map(p_x, 0, img_w, -noise_range, noise_range) + noise_range_max;
    let y = map(p_y, 0, img_h, -noise_range, noise_range) + noise_range_max;

    let r = noise(x, y, t) * 255;

    img.pixels[i] = r;
    img.pixels[i + 1] = r;
    img.pixels[i + 2] = r;
    img.pixels[i + 3] = 255;
  }

  img.updatePixels();

  image(img, 0, 0, w, h);
}
