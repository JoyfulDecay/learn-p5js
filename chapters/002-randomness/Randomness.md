# Randomness

Random functions are at the heart of any procedurally generated art.

P5JS provides functions for generating random numbers with different properties.


## random()

The `random` function returns a random value in some range with a uniform distribution.  I.e. all values have an equal probability of  being returned.

https://github.com/JoyfulDecay/learn-p5js/blob/6a912af07476e87123b9296ebe8cdc76b48c225b/chapters/002-randomness/random-distribution.js#L1-L13

## randomGaussian

P5JS provides the `randomGaussian` function that allows some control over the distribution of the random value.

Instead of directly setting the minimum and maximum values for the random values we instead define:
1. `mean` - On average the returned value will be close to this number.
2. `standard deviation` - Controls how wide the spread of values will be.

It is important to know that the minimum and maximum values returned by `randomGaussian` are not defined so we must check that the values are within our desired range.  

https://github.com/JoyfulDecay/learn-p5js/blob/91be68359670e6bf92706a0d2773faa98da90044/chapters/002-randomness/gaussian-distribution-barchart.js#L1-L60
