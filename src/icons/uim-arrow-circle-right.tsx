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
    d: 'm12.707 16.707 4-4a1.004 1.004 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 1.414L13.586 11H8a1 1 0 0 0 0 2h5.586l-2.293 2.293a1 1 0 0 0 1.414 1.414Z'
  }));
});