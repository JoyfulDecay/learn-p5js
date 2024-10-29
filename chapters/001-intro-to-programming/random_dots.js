//size of canvas
let w = 800;
let h = 800;

//track how much time has passed
let t = 0;
let time_between_dots = 0.333;

function setup() { 
  createCanvas(w, h); 
  background(220); 
  colorMode(HSB);
} 
  
function draw() {
  
  t += deltaTime;
  
  if(t < time_between_dots)
    return;
  
  let x = random(0,w); 
  let y = random(0,h);
  let hue = random(0, 360);
  let weight = random(1, 30);
    
  stroke(hue,100,100);
  strokeWeight(weight);
    
  point(x, y);
  
  t = 0;
} 
