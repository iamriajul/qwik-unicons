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
    d: 'M7 2C4.243 2 2 4.691 2 8s2.243 6 5 6 5-2.691 5-6-2.243-6-5-6Zm0 7.243a1.146 1.146 0 0 1-1-1.25 1.146 1.146 0 0 1 1-1.25 1.146 1.146 0 0 1 1 1.25 1.146 1.146 0 0 1-1 1.25Z'
  }));
});