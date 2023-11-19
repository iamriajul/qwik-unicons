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
    d: 'M12 13a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1zm0 3a.99.99 0 0 1-1-1 1.05 1.05 0 0 1 .29-.71 1.027 1.027 0 0 1 .33-.21 1.002 1.002 0 0 1 1.09.21A1.052 1.052 0 0 1 13 15a.99.99 0 0 1-1 1z'
  }));
});