# Shaders

Shaders are programs that run on the graphics card as opposed to the CPU.

Graphics cards have the benefit that they can run code in parallel.  When rendering a rectangular grid of pixels the CPU will draw one pixel at a time while the graphics card will process every pixel at the same time.  This can result in faster completion of certain workloads.

Shaders are part of a 'graphics pipeline'.  For our purposes we can think of the following steps:
1. Define the geometry of the scene in Javascript.
2. Process the geometry with a desired shader in Javascript.
3. First the 'vertex' shader is run on every vertex in the geometry.
4. Second the fragment shader is run on every visible pixel of the geometry.

## 2D Shader Setup

To set up a sketch that uses a fragment shader to output 2D graphics requires 3 files.

### sketch.js

### Vertex Shader

Executed once for every vertex in the scene.  Can pass data to the fragment shader.

### Fragment Shader

Executed once for every pixel in the texture.  Outputs a colour.

## Passing Data from Vertex to Fragment Shader

The vertex shader can pass the current position in world space to the fragment shader.  First it must declare an attribute so that this data will be passed to the vertex shader:

`attribute vec2 aTexCoord;`

Then we define the variable that will be passed to the fragment shader:

`varying vec2 vTexCoord;`

During the vertex shader's `main` function we copy the data from the input attribute to the output variable:

`vTexCoord = aTexCoord;`

Now in the fragment shader we can define the input variable:

`varying vec2 vTexCoord;`

And use it in our `main` function:

```
  float r = vTexCoord.s;
  float g = vTexCoord.t;
```

## Comparison of CPU and GPU Code

### Simple UV Shader

This sketch produces a rectangle that gets more red as the horizontal position increases, and more green as the vertical position increases.  This texture is the standard representation of 2D coordinates.

#### CPU Version

The CPU version will render the image and print to the console how long it took.

https://github.com/JoyfulDecay/learn-p5js/blob/023da18855c13f7486858a75579b431292ec61f1/chapters/shaders/UV_CPU.js#L1-L40

#### GPU Version

The sketch for the GPU version can be found here:  https://editor.p5js.org/JoyfulDecay/sketches/cvLe2lRdj

This sketch prints the time it took to render as well and for me that's a 1000x speed increase.


## Further Reading


https://p5js.org/tutorials/intro-to-shaders/
