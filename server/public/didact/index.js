import { createElement } from './1createFiberElements.js';
import { render } from './5render.js';
import { workLoop } from './7workLoop.js';
import { useState } from './9useState.js';

requestIdleCallback(workLoop);


const Didact = {
  createElement,
  render,
  useState,
}

export default Didact;