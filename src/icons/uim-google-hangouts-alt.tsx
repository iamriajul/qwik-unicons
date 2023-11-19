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
    d: 'M12 23a1 1 0 0 1-1-1v-1.477a9.842 9.842 0 1 1 10.705-8.527 12.531 12.531 0 0 1-9.466 10.975A.997.997 0 0 1 12 23Z'
  }));
});