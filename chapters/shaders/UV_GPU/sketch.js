let w = 800;
let h = 800;

let uv_shader;

function preload() {
  uv_shader = loadShader("default.vert", "uv.frag");
}

function setup() {
  createCanvas(w, h, WEBGL);
  noLoop();
}

function draw() {
  let t0 = millis();

  shader(uv_shader);

  let elapsed_time = millis() - t0;
  console.log(`Render took ${elapsed_time} millis.`);

  plane(w, h);
}
