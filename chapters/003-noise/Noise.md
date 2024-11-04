# Noise

Another way to generate random sequences of numbers is noise.  Noise is similar to randomness but it produces smooth and continuous values.


## Moving a Circle with Noise

Moving a circle with noise is similar to how random works:

https://github.com/JoyfulDecay/learn-p5js/blob/1f697eab405aecf4fd00f0286f562893723f57f5/chapters/003-noise/moving-circle-with-noise.js#L1-L26

Note:
- Noise always returns a value from 0 to 1.
- Noise seed is set in order to produce different sequences for each variable.


## Noise Distribution

Noise has a 'normal distribution' which means values in the middle of its range are more likely:

https://github.com/JoyfulDecay/learn-p5js/blob/90f3dc5bab6c69d76bf11532dc6fa6f7e21ce708/chapters/003-noise/noise-distribution.js#L1-L63


## 2D Noise Map

P5JS allows us to generate noise with 3 dimensions.  This can be visualised as a two dimensional texture with the third dimension being used as a 'time' variable to control animation.

https://github.com/JoyfulDecay/learn-p5js/blob/d612062a786a772d6c3aeb651ee8a0341713e48d/chapters/003-noise/2D-noise-map.js#L1-L60


## Terrain Generation

A common technique is to use 2D noise values as a height value for terrain generation:

https://github.com/JoyfulDecay/learn-p5js/blob/7fe25dcf89b8f1b970bb35736b040540e94fcb74/chapters/003-noise/terrain-generation.js#L1-L61
