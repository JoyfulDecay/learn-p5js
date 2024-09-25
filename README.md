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

For now we will deal only with the `setup` and `draw` functions
