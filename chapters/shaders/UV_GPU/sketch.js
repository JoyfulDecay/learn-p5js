let w = 800;
let h = 800;

let uv_shader;

function preload() {
  uv_shader = loadShader("default.vert", "uv.frag");
}

function setup() {
  createCanvas(w, h, WEBGL);
}

function draw() {
  shader(uv_shader);
  plane(w, h);
}
