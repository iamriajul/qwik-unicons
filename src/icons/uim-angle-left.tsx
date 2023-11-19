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
    d: 'M14.121 17.243a.997.997 0 0 1-.707-.293l-4.242-4.243a1 1 0 0 1 0-1.414l4.242-4.243a1 1 0 0 1 1.414 1.414L11.293 12l3.535 3.536a1 1 0 0 1-.707 1.707Z'
  }));
});