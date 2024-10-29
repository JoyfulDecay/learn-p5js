function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(135, 206, 235);
  
  //clouds
  fill(255,255,255);
  strokeWeight(0);
  ellipse(290, 40, 130, 30);
  ellipse(70, 30, 180, 30);
  ellipse(230, 20, 100, 30);
  
    
  //ground
  strokeWeight(2);
  fill(77, 235, 55);
  rect(0,250, 400,400);
  
  //house
  fill(200, 180, 77);
  rect(160,200, 80);
  
  //roof
  fill(255, 100, 90);
  triangle(160,200, 200, 150, 240, 200)
  
  //path
  fill(205, 220, 215);
  quad(195, 280, 205, 280, 225, 400, 175, 400);
}
