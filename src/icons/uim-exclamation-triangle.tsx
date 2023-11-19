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
    d: 'M20.057 22H3.943a3.023 3.023 0 0 1-2.618-4.534L9.382 3.511a3.023 3.023 0 0 1 5.236 0l8.057 13.955A3.023 3.023 0 0 1 20.057 22Z'
  }));
});