let r1 = 200;
let r2 = 200;
let m1 = 500;
let m2 = 100;
let a1 = 0;
let a1_v = 0;
let a2 = 0;
let a2_v = 0;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
let g = 1;
let origin_x = 400;
let origin_y = 400;
let hue = 0;

let pg;

function setup() {
  w = 800;
  h = 800;
  createCanvas(w, h);
  pg = createGraphics(w,h);
  pg.colorMode(HSB);

  a1 = map(random(), 0,1, -2*PI, 2*PI);
  a2 = map(random(), 0,1, -2*PI, 2*PI);
  m1 = map(random(), 0,1, 10, 1000);
  m2 = map(random(), 0,1, 10, 1000);
}

function update_balls() {
  x1 = origin_x + r1 * sin(a1);
  y1 = origin_y + r1 * cos(a1);
  x2 = x1 + r2 * sin(a2);
  y2 = y1 + r2 * cos(a2);
}

function update_angles() {
  let num1 = -g * (2 * m1 + m2) * sin(a1)
    - m2 * g * sin(a1-2*a2)
    - 2 * sin(a1-a2) * m2 * (pow(a2_v,2)*r2+pow(a1_v,2)*r1*cos(a1-a2));

  let den1 = r1*(2*m1 + m2 - m2*cos(2*a1 - 2*a2));

  let num2 = 2*sin(a1-a2) * (
              pow(a1_v,2)*r1*(m1+m2)
              + g*(m1+m2)*cos(a1)
              + pow(a2_v,2)*r2*m2*cos(a1-a2))

  let den2 = r2*(2*m1+m2-m2*cos(2*a1-2*a2))

  let a1_a = num1/den1;
  let a2_a = num2/den2;

  a1_v += a1_a;
  a2_v += a2_a;

  a1 += a1_v;
  a2 += a2_v;
}

function draw() {
  background(255);

  let line_start_x = x2;
  let line_start_y = y2;

  update_angles();
  update_balls();

  let line_end_x = x2;
  let line_end_y = y2;

  if(frameCount > 1) {
    pg.background(255,0.001);
    pg.stroke(hue,255,255);
    pg.strokeWeight(2);
    pg.line(line_start_x, line_start_y, line_end_x, line_end_y);
    image(pg, 0, 0);
    hue = (hue+1) % 360;
  }

  stroke(0);
  strokeWeight(2);

  //draw ball 1
  line(origin_x,origin_y,x1,y1);
  fill(0);
  circle(x1, y1, sqrt(m1));

  //draw ball 2
  line(x1,y1,x2,y2);
  fill(0);
  circle(x2, y2, sqrt(m2));
}
