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
    d: 'm15.707 5.293-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 1.414 1.414L11 5.414V17a1 1 0 0 0 2 0V5.414l1.293 1.293a1 1 0 0 0 1.414-1.414Z'
  }));
});