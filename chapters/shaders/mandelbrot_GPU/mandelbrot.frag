precision highp float;
precision highp int;

varying vec2 vTexCoord;

struct ComplexNumber {
  float a;
  float b;
};

uniform sampler2D ramp;

uniform int max_iter;
uniform float c_range;
uniform float c_offset_x;
uniform float c_offset_y;

float escape = 2.0;

float mag(ComplexNumber i) {
  return sqrt(i.a*i.a + i.b*i.b);
}
  
ComplexNumber add(ComplexNumber i, ComplexNumber j) {  
  return ComplexNumber(i.a+j.a, i.b+j.b);
}
  
ComplexNumber pow2(ComplexNumber i) {
  return ComplexNumber(
    pow(i.a,2.0) - pow(i.b,2.0),
    2.0*i.a*i.b
  );
}

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

vec4 escape_color(ComplexNumber Z, int n) {

  
  float mu = float(max_iter) - float(n) -
    log(log(mag(Z)))/log(2.0);
  
  float c_norm = map(mu, 
    0.0, float(max_iter), 
    0.0, 1.0);

  return texture2D(ramp, vec2(c_norm, 0.0));
}

vec4 mandelbrot() {
  
  ComplexNumber Z = ComplexNumber(0.0, 0.0);
  
  float c_a = map(vTexCoord.x, 0.0, 1.0, 
    -c_range+c_offset_x, c_range+c_offset_x);
  float c_b = map(vTexCoord.y, 0.0, 1.0, 
    -c_range+c_offset_y, c_range+c_offset_y);
  
  ComplexNumber C = ComplexNumber(c_a, c_b);
  
  for(int i=0; i<999999; i++) {
    // Z -> Z^2 + C
    Z = pow2(Z);
    Z = add(Z,C);
    
    // if(mag(Z) > 2) -> escape
    if(mag(Z) > 2.0)
      return escape_color(Z, i);
    
    if((i+1) > max_iter) break;
  }
  
  return vec4(0.0,0.0,0.0,1.0);
}

void main() {
  
  vec4 myColor = mandelbrot();
  
  gl_FragColor = myColor;
}
