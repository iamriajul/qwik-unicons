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
    d: 'M5 8a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1.001 1.001 0 0 0-1-1zm14 4a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1.001 1.001 0 0 0-1-1zM5 22a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1.001 1.001 0 0 0-1-1zm14 4a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1.001 1.001 0 0 0-1-1z'
  }));
});