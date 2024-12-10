# Shaders

Shaders are programs that run on the graphics card as opposed to the CPU.

Graphics cards have the benefit that they can run code in parallel.  When rendering a rectangular grid of pixels the CPU will draw one pixel at a time while the graphics card will process every pixel at the same time.  This can result in faster completion of certain workloads.

## Comparison of CPU and GPU Code

### Simple UV Shader

This sketch produces a rectangle that gets more red as the horizontal position increases, and more green as the vertical position increases.

#### CPU Version

https://github.com/JoyfulDecay/learn-p5js/blob/38385db0e37d58887b9dcd08223c0a33d5cb4c6f/chapters/shaders/UV_CPU.js

#### GPU Version

https://p5js.org/tutorials/intro-to-shaders/
