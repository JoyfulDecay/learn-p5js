let w = 800;
let h = 800;

let m_shader;

let color_pickers;
let num_colors = 3;
let ramp_texture;

let c_range = 2;
let c_range_input;
let c_offset_x = 0;
let c_offset_y = 0;

function preload() {
  m_shader = loadShader("default.vert", "uv.frag");
}

function setup() {
  createCanvas(w, h, WEBGL);

  ramp_texture = createGraphics(w, 8);

  let ui_y = h + 20;

  color_pickers = [];
  for (let i = 0; i < num_colors; i++) {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let p = createColorPicker(color(r, g, b));
    p.position(i * 100 + 20, ui_y);
    color_pickers.push(p);
  }
}

function pack_colors() {
  let c = [];
  for (const p of color_pickers) {
    let a = p.color();
    c.push(a);
  }
  return c;
}

function ramp() {
  let p = pack_colors();
  p = p.map((val, idx) => [val, (1 / p.length) * idx]);

  for (let i = 0; i < ramp_texture.width; i++) {
    ramp_texture.stroke(paletteLerp(p, i / ramp_texture.width));
    rectMode(CENTER);
    //noStroke();
    ramp_texture.rect(i, 0, 1, 8);
  }
}

function draw() {
  ramp();

  let c = pack_colors();

  m_shader.setUniform("max_iter", 70);
  m_shader.setUniform("colors", c);
  m_shader.setUniform("c_range", c_range);
  m_shader.setUniform("c_offset_x", c_offset_x);
  m_shader.setUniform("c_offset_y", c_offset_y);
  m_shader.setUniform("ramp", ramp_texture);

  shader(m_shader);
  plane(w, h);
}

function mouseWheel(event) {
  let scroll_speed = c_range * 0.1;
  let amt = event.delta > 0 ? scroll_speed : -scroll_speed;
  c_range += amt;
}

function keyPressed() {
  let amt = c_range * 0.1;

  if (keyCode === UP_ARROW) c_offset_y -= amt;
  if (keyCode === DOWN_ARROW) c_offset_y += amt;
  if (keyCode === RIGHT_ARROW) c_offset_x += amt;
  if (keyCode === LEFT_ARROW) c_offset_x -= amt;
}
