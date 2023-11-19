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
    d: 'M15 6a1 1 0 0 0-1 1v4h-4V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-4h4v4a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1Z'
  }));
});