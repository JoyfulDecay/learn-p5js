# Shaders

Shaders are programs that run on the graphics card as opposed to the CPU.

Graphics cards have the benefit that they can run code in parallel.  When rendering a rectangular grid of pixels the CPU will draw one pixel at a time while the graphics card will process every pixel at the same time.  This can result in faster completion of certain workloads.

## Comparison of CPU and GPU Code

### Simple UV Shader

This sketch produces a rectangle that gets more red as the horizontal position increases, and more green as the vertical position increases.  This texture is the standard representation of 2D coordinates.

#### CPU Version

The CPU version will render the image and print to the console how long it took.

https://github.com/JoyfulDecay/learn-p5js/blob/023da18855c13f7486858a75579b431292ec61f1/chapters/shaders/UV_CPU.js#L1-L40

#### GPU Version

https://p5js.org/tutorials/intro-to-shaders/
