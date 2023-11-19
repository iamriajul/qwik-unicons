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
    d: 'M13 7a1 1 0 0 0-2 0v3.268l-1.098-.634a1 1 0 0 0-1 1.732l2.598 1.5A1.014 1.014 0 0 0 13 12Z'
  }));
});