#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float delay(float time, float order){
  float delaytime = u_time - (order * time);
  return delaytime;
}

float positivePiston(float x, float min, float max){
  return clamp(abs(sin(x)), min, max);
}

void main() {
  const float LINE_AMOUNT = 40.0;
  const float LINE_WIDTH_SCALE = 1.0/1000.0;
  const float TILE_SIZE = 0.9;

  vec2 st = (gl_FragCoord.xy * 2.0 - u_resolution) / u_resolution;
  vec2 stTile = mod(st, TILE_SIZE) - TILE_SIZE / 2.0;
  vec3 line = vec3(0.0, 0.0, 0.0);

  for(float i =0.0; i <= LINE_AMOUNT; i++){
    float slope = -(LINE_AMOUNT - i) / i;
    float intercept = (LINE_AMOUNT - i) / LINE_AMOUNT;
    float y = (slope * length(stTile.x) + intercept);
    float lineColor = ((1.0 - sin(delay(0.5, i))) * LINE_WIDTH_SCALE) / abs(y - (length(stTile.y)));
    line += vec3(
      lineColor * abs(sin(delay(0.2, i))), 
      lineColor * abs(cos(delay(0.3, i))), 
      lineColor * positivePiston(delay(0.5, i), 0.7, 0.9)
    );
  }

  gl_FragColor = vec4(line, 1.0);
}