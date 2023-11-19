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
    d: 'M12.5 14.5h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-5-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm10-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0 4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z'
  }));
});