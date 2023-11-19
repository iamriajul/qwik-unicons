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
    d: 'M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M15.7,12.7C15.7,12.7,15.7,12.7,15.7,12.7c-0.4,0.4-1,0.4-1.4,0c0,0,0,0,0,0L13,11.4V15c0,0.6-0.4,1-1,1s-1-0.4-1-1v-3.6l-1.3,1.3c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l3-3c0.4-0.4,1-0.4,1.4,0c0,0,0,0,0,0l3,3C16.1,11.7,16.1,12.3,15.7,12.7z'
  }));
});