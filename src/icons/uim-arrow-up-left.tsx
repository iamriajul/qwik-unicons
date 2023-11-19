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
    d: 'M7 18a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H8v9a1 1 0 0 1-1 1Z'
  }));
});