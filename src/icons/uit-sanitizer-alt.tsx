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
    d: 'M14.5,16h-3c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h3c0.3,0,0.5-0.2,0.5-0.5S14.8,16,14.5,16z M16.3,8H16V4.5c0,0,0,0,0,0C16,4.2,15.8,4,15.5,4h-2V2h1C14.8,2,15,1.8,15,1.5S14.8,1,14.5,1H9.7c-1.6,0-3,0.9-3.7,2.3C5.9,3.5,6,3.8,6.3,3.9C6.3,4,6.4,4,6.5,4c0.2,0,0.4-0.1,0.4-0.3C7.5,2.7,8.6,2,9.7,2h2.8v2h-2c0,0,0,0,0,0C10.2,4,10,4.2,10,4.5V8H9.7C8.2,8,7,9.2,7,10.7v9.6C7,21.8,8.2,23,9.7,23h6.6c1.5,0,2.7-1.2,2.7-2.7v-9.6C19,9.2,17.8,8,16.3,8z M11,5h2h0h2v3h-4V5z M18,20.3c0,0.9-0.8,1.7-1.7,1.7H9.7C8.8,22,8,21.2,8,20.3v-9.6C8,9.8,8.8,9,9.7,9h0.8h5h0h0.8c0.9,0,1.7,0.8,1.7,1.7V20.3z'
  }));
});