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
    d: 'M9.942 22a.997.997 0 0 1-.707-.293l-4.628-4.628a1 1 0 0 1 0-1.414l4.628-4.63a1 1 0 0 1 1.414 1.415l-3.92 3.922 3.92 3.921A1 1 0 0 1 9.942 22Z'
  }));
});