let w = 800;
let h = 800;
let half_w = w / 2;
let half_h = h / 2;

let num_frames = 120;
let times = [];

let num_spheres = 500;
let sphere_d = 10;

let layer;

let pd;

function setup() {
  pd = pixelDensity();
  createCanvas(w, h, WEBGL);
  layer = createFramebuffer();
}

function performance_check() {
  if (frameCount >= 1) times.push(deltaTime);

  if (frameCount > num_frames) {
    let sum = times.reduce((sum, val) => sum + val);
    let average = sum / times.length;
    let min_t = min(times);
    let max_t = max(times);
    let median = times.toSorted()[floor(times.length / 2)];

    console.log(`Median=${median} Mean=${average}, Min=${min_t}, Max=${max_t}`);
    noLoop();
  }
}

function draw_circles() {
  layer.begin();
  clear();
  lights();

  noStroke();
  fill("red");

  for (let i = 0; i < num_spheres; i++) {
    push();
    translate(random(-half_w, half_w), random(-half_h, half_h), 0);
    sphere(10);
    pop();
  }

  layer.end();

  image(layer, 0, 0, w, h, 0, 0, layer.width, layer.height, COVER);
}

function draw() {
  background(220);

  translate(-half_w, -half_h);
  draw_circles();

  performance_check();
}
