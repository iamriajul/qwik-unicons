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
    d: 'M19 14a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zM8 15a6.007 6.007 0 0 1-6-6V3a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4v5a4 4 0 0 0 8 0V4h-1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v6a6.007 6.007 0 0 1-6 6z'
  }));
});