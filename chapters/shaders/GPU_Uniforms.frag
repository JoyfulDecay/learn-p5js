let w = 400;
let h = 400;

let colorPicker;

function preload() {
  uv_shader = loadShader('default.vert', 'uv.frag');
}

function setup() {
  createCanvas(w, h, WEBGL);
  colorMode(RGB, 255);
  colorPicker = createColorPicker(color(123,77,69));
  colorPicker.position(10, 420);
}

function draw() {
  
  let c = colorPicker.color()._array;
  
  shader(uv_shader);
  
  uv_shader.setUniform('uni_color', c)
  
  plane(w,h);
}
