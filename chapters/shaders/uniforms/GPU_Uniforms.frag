precision highp float;

uniform vec4 uni_color;

varying vec2 vTexCoord;

void main() {  
  vec4 myColor = uni_color;
  gl_FragColor = myColor;
}
