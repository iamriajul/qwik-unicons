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
    d: 'M3.5 20.5a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-15v15a1 1 0 0 1-1 1Z'
  }));
});