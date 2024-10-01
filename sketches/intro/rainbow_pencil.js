let hue = 0;

function setup() { 
  createCanvas(800, 800); 
  background(220); 
  colorMode(HSB);
} 
  
function draw() { 
  let x = mouseX; 
  let y = mouseY; 
    
  if(mouseIsPressed) {
    stroke(hue,100,100);
    strokeWeight(20);
    
    point(x, y);
    
    hue += 1;
    
    if(hue > 360)
      hue = 0;
  } 
} 
