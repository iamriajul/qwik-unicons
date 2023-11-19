import {component$, createElement} from "@builder.io/qwik";
import { Props } from '../index';

export default component$<Props>(({ color = 'currentColor', size = 24, ...props }) => {
  return createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, createElement('path', {
    d: 'M9.33823,2A1.99959,1.99959,0,0,0,9.339,5.99918h1.99633V4.00041A1.99944,1.99944,0,0,0,9.33823,2h0m0,5.33333H4.01631a2,2,0,0,0-.00082,4H9.33823a2,2,0,0,0,0-4Z'
  }));
});