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
    d: 'M16.5 23a6.501 6.501 0 0 1-2.809-.639A10.491 10.491 0 0 1 1.64 10.31a6.499 6.499 0 0 1 8.67-8.67A10.491 10.491 0 0 1 22.36 13.69 6.499 6.499 0 0 1 16.5 23Z'
  }));
});