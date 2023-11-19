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
    d: 'M16.243 15.121a.997.997 0 0 1-.707-.293L12 11.293l-3.536 3.535a1 1 0 0 1-1.414-1.414l4.243-4.242a1 1 0 0 1 1.414 0l4.243 4.242a1 1 0 0 1-.707 1.707Z'
  }));
});