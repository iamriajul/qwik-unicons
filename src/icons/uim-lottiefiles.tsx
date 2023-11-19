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
    d: 'M7 18a1 1 0 0 1 0-2c1.66 0 2.856-2.177 4.124-4.482C12.616 8.805 14.159 6 17 6a1 1 0 0 1 0 2c-1.66 0-2.856 2.177-4.124 4.482C11.384 15.195 9.841 18 7 18Z'
  }));
});