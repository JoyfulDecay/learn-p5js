# Vectors

Vectors provide a more succint way to model moving objects than using separate variables for `x` and `y` positions and velocities.


## Modelling Forces with Vectors

The `Ball` class in this example provides a template for how we can model Newtonian physics with vectors.

ihttps://github.com/JoyfulDecay/learn-p5js/blob/d5a3aeadc9f655f90d3c213adfdde39daa24272f/chapters/004-vectors/modelling_forces.js#L1-L52


## Gravity

For this example we model gravitational force that is pulling everything down uniformly.  It is important to say that we could code our gravity to go in any direction.

In order to stop our balls from going through the floor we add a bouncing system.  

First we calculate the distance between the ball and the floor.  If the ball is close to the floor we add a bouncing force and if it is far from the floor we fall.  This conditional is designed to stop the balls from 'vibrating' when they are close to the edge.

https://github.com/JoyfulDecay/learn-p5js/blob/aa57d64ff2fa3a6c6a8af3575189880b7b6b5f22/chapters/004-vectors/modelling_gravity.js#L1-L80


## Friction

Friction is a good force to start with as it will stop the other forces from getting out of control and making everything move fast.

Friction is calculated by copying the current velocity and multiplying it by `-1` in order to reverse its direction.  A copy of the vector is created because the velocity vector would have its data modified otherwise.

The friction vector is normalized, which maintains its angle but scales its magnitude to 1.  A normalized variable is known as a 'unit vector'.  We can scale this variable to control the magnitude without changing the direction.

We use a simplified version of the friction formula to scale the friction vector and return it.

In the code `c` is the coefficient of friction.  This value can be changed to simulate the properties of different surfaces such as ice.  We also define the `normal_force` to be 1.  The normal force is the force perpendicular to the direction of travel.  We can hardcode it as 1 for now and revisit it later if we wish to refine the simulation.

https://github.com/JoyfulDecay/learn-p5js/blob/322616a526c2a28da474663e7c87c5dc8a97f241/chapters/004-vectors/modelling_friction.js#L1-L69
