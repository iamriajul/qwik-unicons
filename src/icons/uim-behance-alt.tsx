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
    d: 'M7.5 20H2a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h5.5a4.5 4.5 0 0 1 0 9ZM3 18h4.5a2.5 2.5 0 0 0 0-5H3Z'
  }));
});