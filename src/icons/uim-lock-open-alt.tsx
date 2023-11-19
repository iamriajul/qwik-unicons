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
    d: 'M8 11a1 1 0 0 1-1-.999V7a5.002 5.002 0 0 1 8.532-3.542 5.078 5.078 0 0 1 1.307 2.293 1 1 0 1 1-1.937.501v-.003a3.057 3.057 0 0 0-.786-1.379A3.002 3.002 0 0 0 9 7v3a1 1 0 0 1-.999 1H8zM13.5 14.5a1.5 1.5 0 1 0-3 0c0 .443.195.836.5 1.11V17.002A1 1 0 0 0 12 18h.001A1 1 0 0 0 13 17v-1.39c.305-.274.5-.667.5-1.11z'
  }));
});