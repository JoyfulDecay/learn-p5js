//size of canvas
let w = 800;
let h = 800;

//position of circle
let circle_x, circle_y;
let circle_vel_x, circle_vel_y;
let circle_size;

let max_speed;

function setup() { 
  createCanvas(w, h); 

  max_speed = 10;
  
  circle_x = w/2;
  circle_y = h/2;
  circle_vel_x = random(-1, 1) * max_speed;
  circle_vel_y = random(-1, 1) * max_speed;
  circle_size = 16;
} 
  
function draw() {
  background(220); 
  
  circle_x += circle_vel_x;
  circle_y += circle_vel_y;
    
  circle(circle_x, circle_y, circle_size);
} 
