#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution;
  vec2 st_mouse = u_mouse/u_resolution;
  gl_FragColor = vec4(st_mouse.x, st.y, st_mouse.y, 1.0);
}