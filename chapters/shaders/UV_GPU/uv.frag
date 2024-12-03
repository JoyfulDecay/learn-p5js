precision highp float;

varying vec2 vTexCoord;

void main() {
  float r = vTexCoord.s;
  float g = vTexCoord.t;

  vec4 myColor = vec4(r, g, 0.0, 1.0);
  gl_FragColor = myColor;
}
