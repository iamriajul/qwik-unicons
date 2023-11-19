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
    d: 'M12 6a1.003 1.003 0 0 0-1 1v4.73L9.4 14.5a1 1 0 1 0 1.73 1l1.69-2.93A.999.999 0 0 0 13 12V7a1.003 1.003 0 0 0-1-1Z'
  }));
});