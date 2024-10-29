let w = 800;
let h = 800;

function setup() {
    createCanvas(w, h);
}

function draw() {
    strokeWeight(0);
    fill(255,0,0,10);
    let x = random(0, w)
    circle(x, h/2, 20);
}
