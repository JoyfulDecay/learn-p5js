# Intro to Programming with P5JS

This document is intended to be used by hosts leading introductory coding sessions.  The goal is to get the participants to start coding simple P5JS sketches as soon as possible.  The host should use the example sketches to demonstrate how language features work.

## The P5JS Web Editor

The editor can be found here:  https://editor.p5js.org/

The play and stop buttons can be used to run your sketches.  Pressing play will show a grey rectangle.  This is the default sketch.  It simply creates a small window and draws a grey background.

There is also a menu on the top where you can access utilities such as saving and loading sketches - though you will need to log in for that.

## Coding a Sketch
By default the editor has two functions defined.  
- The `setup` function is executed once when the sketch starts.
- the `draw` function is called once per frame - 60 times per seconds.

> A function is a block of code that performs a specific task.  Functions can be referenced from other parts of the code.  There are 'built-in' functions such as `setup` and `draw` but we can also define our own.

For now we will deal only with the `setup` and `draw` functions.

### Drawing a Circle
We can create some custom behaviour by adding code inside the block surrounded by curly brackets:

```
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(200,200,100);
}
```

The `circle` function is another built in function.  It causes P5JS to draw a circle.  The definition of the function and help using it can be found in the *P5JS Docs*:

https://p5js.org/reference/p5/circle/

Here we can see that the function accepts 3 parameters: `x`, `y` and `d`

> Parameters are used to provide data that functions can use to perform their task.  Parameters appear between the parentheses ()s in a set order as defined by the function.  For all P5JS built in functions the list of expected parameters can be found in the docs.

In what ways does changing the values of the `circle` function's parameters affect the circle drawn on screen?
