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
    d: 'M21 7.167H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-12 10H3a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2z'
  }));
});