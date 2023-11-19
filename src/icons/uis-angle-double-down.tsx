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
    d: 'M11.3,11.5c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l3-3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L12,9.3L9.7,7c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L11.3,11.5z M14.3,12.5L12,14.8l-2.3-2.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3,3c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l3-3c0.4-0.4,0.4-1,0-1.4C15.3,12.2,14.7,12.2,14.3,12.5z'
  }));
});