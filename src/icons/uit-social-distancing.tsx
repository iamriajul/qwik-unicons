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
    d: 'M9,17.5H4.2l1.6-1.6c0.2-0.2,0.2-0.5,0-0.7c-0.2-0.2-0.5-0.2-0.7,0l-2.5,2.5c0,0-0.1,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0v0c0,0.1,0,0.1,0,0.2s0.1,0.1,0.1,0.2l2.5,2.5C5.2,20.9,5.4,21,5.5,21c0.1,0,0.3-0.1,0.4-0.1c0.2-0.2,0.2-0.5,0-0.7l-1.6-1.6H9c0.3,0,0.5-0.2,0.5-0.5S9.3,17.5,9,17.5z M21.4,17.6l-2.5-2.5c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.5,0,0.7l1.6,1.6H15c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h4.8l-1.6,1.6c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.3,0.2,0.5,0.5,0.5c0.1,0,0.3-0.1,0.4-0.1l2.5-2.5c0,0,0.1-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2c0,0,0,0,0,0c0-0.1,0-0.1,0-0.2C21.4,17.7,21.4,17.7,21.4,17.6z M7.9,9.9c0.8-0.6,1.4-1.5,1.4-2.6C9.2,5.5,7.8,4,6,4S2.8,5.5,2.8,7.2c0,1.1,0.5,2,1.4,2.6C2.3,10.6,1,12.4,1,14.5C1,14.8,1.2,15,1.5,15S2,14.8,2,14.5c0-2.2,1.8-4,4-4s4,1.8,4,4v0c0,0.3,0.2,0.5,0.5,0.5h0c0.3,0,0.5-0.2,0.5-0.5C11,12.4,9.7,10.6,7.9,9.9z M6,9.5c-1.2,0-2.2-1-2.2-2.2S4.8,5,6,5c1.2,0,2.2,1,2.2,2.2C8.2,8.5,7.2,9.5,6,9.5z M19.9,9.9c0.8-0.6,1.4-1.5,1.4-2.6C21.2,5.5,19.8,4,18,4s-3.2,1.5-3.2,3.2c0,1.1,0.5,2,1.4,2.6c-1.8,0.7-3.1,2.5-3.1,4.6c0,0.3,0.2,0.5,0.5,0.5s0.5-0.2,0.5-0.5c0-2.2,1.8-4,4-4s4,1.8,4,4v0c0,0.3,0.2,0.5,0.5,0.5h0c0.3,0,0.5-0.2,0.5-0.5C23,12.4,21.7,10.6,19.9,9.9z M18,9.5c-1.2,0-2.2-1-2.2-2.2S16.8,5,18,5c1.2,0,2.2,1,2.2,2.2C20.2,8.5,19.2,9.5,18,9.5z'
  }));
});