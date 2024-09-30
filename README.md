# Intro to Programming with P5JS

This document is intended to be used by hosts leading introductory coding sessions.  The goal is to get the participants to start coding simple P5JS sketches as soon as possible.  The host should use the example sketches to demonstrate how language features work.  

It should be stressed that people will not understand everything the first time they encounter it.  The key is to remain patient, practice with simple projects, and eventually through repetition things will become clear.  Don't be afraid to experiment or ask for help in the discord.


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

https://github.com/JoyfulDecay/learn-p5js/blob/9e41d979a9d9985cd54f3ad347852bd77d8a959d/sketches/circle.js#L1-L8

The `circle` function is another built in function.  It causes P5JS to draw a circle.  The definition of the function and help using it can be found in the *P5JS Docs*:

https://p5js.org/reference/p5/circle/

Here we can see that the function accepts 3 parameters: `x`, `y` and `d`

> Parameters are used to provide data that functions can use to perform their task.  Parameters appear between the parentheses ()s in a set order as defined by the function.  For all P5JS built in functions the list of expected parameters can be found in the docs.

In what ways does changing the values of the `circle` function's parameters affect the circle drawn on screen?


## Dealing with Errors

If there is just a single error in the code you write the system will be unable to proceed.

P5JS will try and find the error and give you its best guess in the console window at the bottom.  Sometimes the error messages can be hard to understand but they'll always include a line number, which can be a good starting point for finding the problem.

Some common errors:
- Misspelling function names.
- Wrong number of parameters to a function.
- Missing a comma between parameters.
- Failing to open or close the parentheses for a function.

With experience you'll learn to understand the meaning of the console error and know how to fix the code.  Chances are you'll continue to make errors as long as you write code so you'll get plenty of practice at fixing them.

## Other Drawing Functions

P5JS has a small collection of shapes that it can draw.  The definitions of the functions can be found in the reference:

https://p5js.org/reference/#Shape

Lets examine a simple drawing that uses some different shapes that P5JS can draw:

https://github.com/JoyfulDecay/learn-p5js/blob/d88592118aa961d56e4f8f6b89506980795a2fe8/sketches/simple-drawing.js#L1-L19

## Drawing with Color

Drawing with color is done by setting the stroke or fill before calling the shape functions:

https://github.com/JoyfulDecay/learn-p5js/blob/3dc90409d9f7787c0526f292a9c6acf4a069a0f9/sketches/color.js#L1-L32

**Note:** Now is a good time to get participants to create their own sketches using shape and colors.


# External Resources

 - [Coding Train 'Code!' YouTube playlist](https://www.youtube.com/watch?v=HerCR8bw_GE&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
