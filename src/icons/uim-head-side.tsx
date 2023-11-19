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
    d: 'M18.5 22h-9a1 1 0 0 1-1-1v-2h-1a2.002 2.002 0 0 1-2-2v-2h-1a1 1 0 0 1-.904-1.426L5.5 9.53V9.5a7.44 7.44 0 0 1 2.277-5.383 7.365 7.365 0 0 1 5.453-2.114 7.698 7.698 0 0 1 7.27 7.77V10a1.031 1.031 0 0 1-.033.256l-1.93 7.266.924 3.2A1 1 0 0 1 18.5 22Z'
  }));
});