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
    d: 'M4 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-2.002zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-2.002zM14 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-2.002zM14 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-2.002z'
  }));
});