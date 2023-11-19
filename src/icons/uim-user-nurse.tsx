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
    d: 'M20.94 22H3.06a1 1 0 0 1-.994-1.108 9.995 9.995 0 0 1 19.868 0A1 1 0 0 1 20.94 22Z'
  }));
});