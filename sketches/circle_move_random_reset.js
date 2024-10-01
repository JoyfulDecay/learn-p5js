//size of canvas
let canvas_w = 800;
let canvas_h = 800;

//position of circle
let circle_x, circle_y;
let circle_vel_x, circle_vel_y;
let circle_size;

let max_speed;

function reset_circle() {
  circle_x = canvas_w/2;
  circle_y = canvas_h/2;
  
  circle_vel_x = random(-1, 1) * max_speed;
  circle_vel_y = random(-1, 1) * max_speed;
  circle_size = random(16,32);
}

function check_edges() {
  let radius = circle_size/2;
  
  if((circle_x-radius) > canvas_w)
    reset_circle();
  if((circle_x+radius) < 0)
    reset_circle();
  
  if((circle_y-radius) > canvas_h)
    reset_circle();
  if((circle_y+radius) < 0)
    reset_circle();
}

function setup() { 
  createCanvas(canvas_w, canvas_h); 

  max_speed = 10;
  
  reset_circle();
}
  
function draw() {
  background(220); 
  
  circle_x += circle_vel_x;
  circle_y += circle_vel_y;
    
  circle(circle_x, circle_y, circle_size);
  
  check_edges();
} 
