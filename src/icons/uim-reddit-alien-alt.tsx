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
    d: 'M18.893 7a3.014 3.014 0 0 1-3-3.022 3 3 0 0 1 6-.023v.023a3.014 3.014 0 0 1-3 3.022zM11.8 23c-6.168 0-11-3.075-11-7s4.832-7 11-7 11 3.075 11 7-4.832 7-11 7z'
  }));
});