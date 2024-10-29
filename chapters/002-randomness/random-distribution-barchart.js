let w = 400;
let h = 400;

let bar_chart;

class BarChart {
  constructor(num_bars) {
    this.num_bars = num_bars;
    this.bars = [];

    for(let i=0; i<num_bars; i++) {
      this.bars.push(0);
    }
  }

  //val should be 0..1
  add_value(val) {
    let b_index = floor(val*this.num_bars);
    this.bars[b_index] += 1;
  }

  //idx should be int 0..num_bars
  get_value(idx) {
    return this.bars[idx];
  }
}

function setup() {
  rectMode(CORNERS);
  createCanvas(w, h);
  bar_chart = new BarChart(32);
}

function draw() {
  background(220);

  for(let i=0; i<bar_chart.num_bars; i++) {
    let x0 = (w/bar_chart.num_bars) * i;
    let y0 = h;

    let x1 = x0 + w/bar_chart.num_bars;
    let y1 = h - bar_chart.get_value(i);

    rect(x0, y0, x1, y1);
  }

  bar_chart.add_value(random());
}
