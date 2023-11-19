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
    d: 'M15.063 23H8.927C2.777 23 1 21.22 1 15.062V8.928C1 2.778 2.78 1 8.938 1h6.135C21.223 1 23 2.78 23 8.938v6.135C23 21.222 21.22 23 15.062 23z'
  }));
});