let w = 400;
let h = 400;

let random_bar_chart;

let num_bars = 64;
let vals_per_tick = 1;
let choice;

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

class WeightedChoice {
  constructor() {
    this.values = [];
    this.weights = [];
  }

  add_value(value, weight) {
    this.values.push(value);
    this.weights.push(weight);
  }

  select_value() {
    let weight_sum = [];

    for (let i = 0; i < this.values.length; i++) {
      weight_sum[i] = this.weights[i];

      if (i > 0) weight_sum[i] += weight_sum[i - 1];
    }

    let max_weight = weight_sum[weight_sum.length - 1];

    let r = random(max_weight);

    for (let i = 0; i < weight_sum.length - 1; i++) {
      if (r < weight_sum[i]) return this.values[i];
    }

    return this.values[this.values.length - 1];
  }
}

function setup() {
  rectMode(CORNERS);
  createCanvas(w, h);
  gaussian_bar_chart = new BarChart(num_bars, "rgb(242,148,69)");

  choice = new WeightedChoice();
  choice.add_value(0.1, 1);
  choice.add_value(0.5, 2);
  choice.add_value(0.75, 1);
}

function draw() {
  background(220);

  for (let i = 0; i < vals_per_tick; i++) {
    let val = choice.select_value();

    if (val >= 0 && val < 1.0) gaussian_bar_chart.add_value(val);
  }

  gaussian_bar_chart.draw();
}
