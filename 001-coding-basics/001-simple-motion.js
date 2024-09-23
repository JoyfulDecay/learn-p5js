let w = 400;
let h = 400;

function setup() {
  createCanvas(w, h);
}

function draw() {
  background(220, 10);

  let t = millis()/1000;

  let x = w/2;
  let y = h/2;

  x = x + sin(t) * w/3;
  y = y + cos(t) * h/3;

  circle(x, y, 10)
}
