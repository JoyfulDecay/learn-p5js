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


#### Definition of a Function
> A function is a block of code that performs a specific task.  Functions can be referenced from other parts of the code.  There are 'built-in' functions such as `setup` and `draw` but we can also define our own.


### Drawing a Circle
We can create some custom behaviour by adding code inside the block surrounded by curly brackets:

https://github.com/JoyfulDecay/learn-p5js/blob/63b5d8a47d222322fee79e1f280b4bea585721d4/sketches/intro/circle.js#L1-L8

The `circle` function is another built in function.  It causes P5JS to draw a circle.  The definition of the function and help using it can be found in the *P5JS Docs*:

https://p5js.org/reference/p5/circle/

Here we can see that the function accepts 3 parameters: `x`, `y` and `d`

#### Definition of a Parameter
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

https://github.com/JoyfulDecay/learn-p5js/blob/63b5d8a47d222322fee79e1f280b4bea585721d4/sketches/intro/simple-drawing.js#L1-L19


## Drawing with Color

Drawing with color is done by setting the stroke or fill before calling the shape functions:

https://github.com/JoyfulDecay/learn-p5js/blob/63b5d8a47d222322fee79e1f280b4bea585721d4/sketches/intro/color.js#L1-L32

**Note:** Now is a good time to get participants to create their own sketches using shape and colors.


## Reading Mouse Position

P5JS exposes the current state of the mouse with a number of variables and functions:  https://p5js.org/reference/#IO

In this scene we read the global variables `mouseX` and `mouseY` and store the values in our own variables.


#### Definition of a Variable
> Variables allow us to store and manipulate data and reference the same value in multiple places in the code.

Here we define the variables using the `let` keyword.  The 'scope' of the variables is limited to the `draw` function.  Trying to use the variables outside there will cause an error, and the value of the variables will be lost each frame.

https://github.com/JoyfulDecay/learn-p5js/blob/63b5d8a47d222322fee79e1f280b4bea585721d4/sketches/intro/mouse_move.js#L1-L12


## Drawing with the Mouse

By moving the `background` call to the `setup` function we can allow our marks to be permanent.

https://github.com/JoyfulDecay/learn-p5js/blob/63b5d8a47d222322fee79e1f280b4bea585721d4/sketches/intro/mouse_draw.js#L1-L15

Adding an `if` statement allows us to control when the pen draws.


#### Definition of a Conditional Statement
> Conditional statements control the flow of execution within the code.  They define blocks of code that are only executed if a condition is satisfied.


## Rainbow Pencil

We can apply this rainbow effect to the pencil by changing the color it draws every frame.  Note that the `colorMode` is used because it's easier to change the 'hue' this way.

The color is stored in a global variable so that its value will persist between frames.


#### Definition of a Global Variable
> Global variables are defined outside any function at the top of the file.  These variables can be referenced inside any function and the data persists between function calls.

https://github.com/JoyfulDecay/learn-p5js/blob/63b5d8a47d222322fee79e1f280b4bea585721d4/sketches/intro/rainbow_pencil.js#L1-L24


## Random Spots on the Canvas

We keep track of how much data has passed using a global variable `t` and the built in variable `deltaTime`, which is the amount of time since the last frame was drawn.  If enough time has not passed we exit early using a `return` statement.


#### Definition of a 'return' Statement
> Exits the function immediately.  Code after this statement will not be executed.

https://github.com/JoyfulDecay/learn-p5js/blob/63b5d8a47d222322fee79e1f280b4bea585721d4/sketches/intro/random_dots.js#L1-L33


## Moving a Cirlce in a Random Direction

In order to move a circle in a given direction we introduce the idea of 'velocity'. Each frame the circle's position is moved according to its velocity so that its position changes over time.

https://github.com/JoyfulDecay/learn-p5js/blob/63b5d8a47d222322fee79e1f280b4bea585721d4/sketches/intro/circle_move_random.js#L1-L31

We could reset the position of the circle by restarting the sketch repeatedly or we could automatically reset the ball when it leaves the screen.

https://github.com/JoyfulDecay/learn-p5js/blob/63b5d8a47d222322fee79e1f280b4bea585721d4/sketches/intro/circle_move_random_reset.js#L1-L52

Here we have used a user defined function for the first time.  We need to reset the ball's position both when the sketch starts and when the ball goes off screen.  This action takes multiple lines of code so it's a good idea to group them together for future reference in a function.


# External Resources

 - [Coding Train 'Code!' YouTube playlist](https://www.youtube.com/watch?v=HerCR8bw_GE&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
