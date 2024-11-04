let w = 400;
let h = 400;

let num_bars = 64;
let vals_per_tick = 8;

let noise_bar_chart;

class BarChart {
  constructor(num_bars, fill_color) {
    this.fill_color = fill_color;
    this.num_bars = num_bars;
    this.bars = [];

    for (let i = 0; i < num_bars; i++) {
      this.bars.push(0);
    }
  }

  //val should be 0..1
  add_value(val) {
    let b_index = floor(val * this.num_bars);
    this.bars[b_index] += 1;
  }

  //idx should be int 0..num_bars
  get_value(idx) {
    return this.bars[idx];
  }

  draw() {
    for (let i = 0; i < this.num_bars; i++) {
      let x0 = (w / this.num_bars) * i;
      let y0 = h;

      let x1 = x0 + w / this.num_bars;
      let y1 = h - this.get_value(i);

      fill(this.fill_color);
      rect(x0, y0, x1, y1);
    }
  }
}

function setup() {
  rectMode(CORNERS);
  createCanvas(w, h);
  noise_bar_chart = new BarChart(num_bars, "rgb(242,148,69)");
}

function draw() {
  background(220);

  let t = frameCount * 0.1;

  for (let i = 0; i < vals_per_tick; i++) {
    let val = noise(t);

    if (val >= 0 && val < 1.0) noise_bar_chart.add_value(val);
  }

  noise_bar_chart.draw();
}