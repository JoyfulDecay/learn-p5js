let w = 800;
let h = 800;

let plane_w = 800;
let plane_h = 800;

let grid_count = 10;
let scale_x = plane_w / grid_count;
let scale_y = plane_h / grid_count;

function setup() {
  createCanvas(w, h, WEBGL);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  rotateX(PI / 3);
  translate(-w / 2, -h / 2);

  for (let i = 0; i < grid_count; i++) {
    beginShape(TRIANGLE_STRIP);
    for (let j = 0; j < grid_count; j++) {
      vertex(j * scale_x, i * scale_y);
      vertex(j * scale_x, (i + 1) * scale_y);
    }
    endShape();
  }
}
