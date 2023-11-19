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
    d: 'M21 14a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm-4 3H4a2.002 2.002 0 0 1-2-2V9a2.002 2.002 0 0 1 2-2h13a2.002 2.002 0 0 1 2 2v6a2.002 2.002 0 0 1-2 2z'
  }));
});