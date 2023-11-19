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
    d: 'M14.058 22a1 1 0 0 1-.707-1.707l3.92-3.921-3.92-3.922a1 1 0 1 1 1.414-1.414l4.628 4.629a1 1 0 0 1 0 1.414l-4.628 4.628a.997.997 0 0 1-.707.293Z'
  }));
});