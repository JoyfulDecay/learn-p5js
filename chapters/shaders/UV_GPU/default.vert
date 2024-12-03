precision highp float;

attribute vec3 aPosition;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

attribute vec2 aTexCoord;
varying vec2 vTexCoord;

void main() {
  // Apply the camera transform
  vec4 viewModelPosition =
  uModelViewMatrix * vec4(aPosition, 1.0);
  // Tell WebGL where the vertex goes
  gl_Position = uProjectionMatrix * viewModelPosition;  

  //copy texcoord for fragment shader
  vTexCoord = aTexCoord;
}
