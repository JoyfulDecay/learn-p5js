let w = 800;
let h = 800;

let noise_seed_x, noise_seed_y;

function setup() {
  createCanvas(w, h);
  noise_seed_x = random(0, 999999);
  noise_seed_y = random(0, 999999);
}

function draw() {
  background(220, 0.01);

  translate(w / 2, h / 2);

  noiseSeed(noise_seed_x);
  let n1 = noise(0.005 * frameCount);
  let x = map(n1, 0, 1, -w / 2, w / 2);

  noiseSeed(noise_seed_y);
  let n2 = noise(0.005 * frameCount);
  let y = map(n2, 0, 1, -h / 2, h / 2);

  circle(x, y, 10);
}
