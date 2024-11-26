let w = 800;
let h = 800;

let num_frames = 60;
let times = [];

function setup() {
  createCanvas(w, h);
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

function draw() {
  background(220);

  performance_check();
}
