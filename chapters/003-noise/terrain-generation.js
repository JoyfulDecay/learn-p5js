let w = 800;
let h = 800;

let plane_w = 800;
let plane_h = 800;

let grid_count = 120;
let scale_x = plane_w / grid_count;
let scale_y = plane_h / grid_count;

let noise_range = 10;
let height_range = 60;

let camera_rot = 0;

function setup() {
  createCanvas(w, h, WEBGL);
}

function terrain_height_map() {
  let terrain = [];

  for (let i = 0; i < grid_count; i++) {
    let row = [];
    for (let j = 0; j < grid_count; j++) {
      let nx = map(i, 0, grid_count, -noise_range, noise_range) + noise_range;
      let ny = map(j, 0, grid_count, -noise_range, noise_range) + noise_range;
      let z = map(noise(nx, ny), 0, 1, -height_range, height_range);
      row.push(z);
    }
    terrain.push(row);
  }
  return terrain;
}

function draw() {
  background(0);
  noStroke();
  rotateX(PI / 3);
  rotateZ(camera_rot);
  camera_rot += 0.01;
  translate(-w / 2, -h / 2);

  directionalLight(220, 250, 220, 0, 1, 0);

  let t_height = terrain_height_map();

  for (let i = 0; i < grid_count - 1; i++) {
    beginShape(TRIANGLE_STRIP);
    for (let j = 0; j < grid_count; j++) {
      let h1 = t_height[i][j];
      let h2 = t_height[i + 1][j];
      let mid = (h1 + h2) / 2;
      fill(map(mid, -height_range, height_range, 0, 255));

      vertex(i * scale_x, j * scale_y, h1);
      vertex((i + 1) * scale_x, j * scale_y, h2);
    }
    endShape();
  }
}
