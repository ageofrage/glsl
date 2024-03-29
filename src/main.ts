import GlslCanvas from 'glslCanvas'
import frag from './fragmentShaders/gradation.frag'

const canvas = document.getElementById('glslCanvas');
const sandbox = new GlslCanvas(canvas);
sandbox.load(frag)