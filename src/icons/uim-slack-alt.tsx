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
    d: 'M9.34 2a2 2 0 0 0 0 4h2V4a2 2 0 0 0-2-2m0 5.33H4a2 2 0 1 0 0 4h5.34a2 2 0 0 0 0-4'
  }));
});