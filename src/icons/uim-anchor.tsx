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
    d: 'M12 22a8.01 8.01 0 0 1-8-8 1 1 0 0 1 2 0 6 6 0 0 0 12 0 1 1 0 0 1 2 0 8.01 8.01 0 0 1-8 8Z'
  }));
});