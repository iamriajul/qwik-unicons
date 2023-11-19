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
    d: 'M5 5a1 1 0 0 1-.707-1.707l.829-.829A4.967 4.967 0 0 1 8.657 1H17a1 1 0 0 1 0 2H8.657a3.022 3.022 0 0 0-2.121.878l-.829.829A.997.997 0 0 1 5 5Z'
  }));
});