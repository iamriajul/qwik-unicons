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
    d: 'M16 21H8a1 1 0 0 1-.832-1.555l4-6a1.038 1.038 0 0 1 1.664 0l4 6A1 1 0 0 1 16 21Z'
  }));
});