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
    d: 'M17,6H7C6.4,6,6,6.4,6,7s0.4,1,1,1h7.6l-8.3,8.3c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0L16,9.4V17c0,0.6,0.4,1,1,1s1-0.4,1-1V7C18,6.4,17.6,6,17,6z'
  }));
});