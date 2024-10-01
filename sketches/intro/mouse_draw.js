function setup() {
  createCanvas(800, 800);
  background(220);
}

function draw() {
  
  let x = mouseX;
  let y = mouseY;
  
  if(mouseIsPressed) {
    strokeWeight(3);
    point(x, y);
  }
}
