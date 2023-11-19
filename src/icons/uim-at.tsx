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
    d: 'M12 16.5a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1-4.5 4.5Zm0-7a2.5 2.5 0 1 0 2.5 2.5A2.503 2.503 0 0 0 12 9.5Z'
  }));
});