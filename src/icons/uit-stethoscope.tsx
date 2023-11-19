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
    d: 'M19.5,8C18.1,8,17,9.1,17,10.5c0,1.2,0.9,2.2,2,2.4v2.6c0,3-2.5,5.5-5.5,5.5c-3,0-5.5-2.5-5.5-5.5V15c2.8-0.3,5-2.6,5-5.5v-7C13,2.2,12.8,2,12.5,2h-2C10.2,2,10,2.2,10,2.5S10.2,3,10.5,3H12v6.5C12,12,10,14,7.5,14S3,12,3,9.5V3h1.5C4.8,3,5,2.8,5,2.5S4.8,2,4.5,2h-2C2.2,2,2,2.2,2,2.5v7c0,2.9,2.2,5.2,5,5.5v0.5c0,3.6,2.9,6.5,6.5,6.5c3.6,0,6.5-2.9,6.5-6.5v-2.6c1.1-0.2,2-1.2,2-2.4C22,9.1,20.9,8,19.5,8z M19.5,12c-0.8,0-1.5-0.7-1.5-1.5S18.7,9,19.5,9c0.8,0,1.5,0.7,1.5,1.5C21,11.3,20.3,12,19.5,12z'
  }));
});