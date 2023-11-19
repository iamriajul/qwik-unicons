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
    d: 'M21,11H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,11,21,11z M17,15H7c-0.3,0-0.5,0.1-0.7,0.3c-0.4,0.4-0.4,1,0,1.4l5,5c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l5-5c0.2-0.2,0.3-0.4,0.3-0.7C18,15.4,17.6,15,17,15z M15.4,8c0,0.6,0.4,1,1,1H17c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4l-0.7-0.7c-0.3-0.3-0.8-0.4-1.2-0.2c-0.5,0.2-0.7,0.8-0.4,1.3C15.4,7.9,15.4,7.9,15.4,8z M11.6,4.8L12,4.4l0.8,0.8c0.2,0.2,0.4,0.3,0.7,0.3h0c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4l-1.1-1.1c-0.1-0.1-0.2-0.1-0.3-0.2c0-0.1-0.1-0.2-0.2-0.3c-0.4-0.4-1-0.4-1.4,0l-1.1,1.1c-0.4,0.4-0.4,1,0,1.4S11.3,5.2,11.6,4.8z M7.1,9c0.3,0,0.5-0.1,0.7-0.3l1.1-1.1c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L6.3,7.2C6.2,7.4,6.1,7.7,6.1,7.9C6.1,8.5,6.5,8.9,7.1,9z M10.9,9h1.5c0.6,0,1-0.4,1-1s-0.4-1-1-1h-1.5c-0.6,0-1,0.4-1,1S10.4,9,10.9,9z'
  }));
});