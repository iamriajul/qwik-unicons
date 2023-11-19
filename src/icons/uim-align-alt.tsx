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
    d: 'M10 5H7a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM21 5h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm-4 4h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z'
  }));
});