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
    d: 'M16.5 6.5h-9a5.5 5.5 0 0 0 0 11h9a5.5 5.5 0 0 0 0-11zm0 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z'
  }));
});