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
    d: 'M8.7,4.7c0.9-0.4,1.8-0.6,2.8-0.7v2.5C11.5,6.8,11.7,7,12,7h0c0.3,0,0.5-0.2,0.5-0.5V4c1.8,0.1,3.5,0.8,4.8,2L17,6.3c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.3,0.2,0.5,0.5,0.5c0.1,0,0.3-0.1,0.4-0.1L18,6.7c1.1,1.3,1.9,3,2,4.8h-2.5c-0.3,0-0.5,0.2-0.5,0.5c0,0.3,0.2,0.5,0.5,0.5H20c-0.1,1-0.3,1.9-0.7,2.8c0,0,0,0,0,0c-0.1,0.3,0,0.5,0.2,0.7c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.5-0.3c0.5-1,0.7-2.1,0.8-3.2h1.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5H21c-0.1-2.1-1-4-2.3-5.5l1-1c0,0,0,0,0,0c0.2-0.2,0.2-0.5,0-0.7c-0.2-0.2-0.5-0.2-0.7,0l-1,1C16.5,4,14.6,3.1,12.5,3V1.5C12.5,1.2,12.3,1,12,1s-0.5,0.2-0.5,0.5V3c-1.1,0.1-2.2,0.3-3.2,0.8C8,3.9,7.9,4.2,8,4.5C8.2,4.7,8.5,4.8,8.7,4.7z M9,13.5c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5C10.5,14.2,9.8,13.5,9,13.5z M9,15.5c-0.3,0-0.5-0.2-0.5-0.5c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5C9.5,15.3,9.3,15.5,9,15.5z M1.9,1.1C1.7,1,1.3,1,1.2,1.1C1,1.3,1,1.7,1.1,1.9L5.3,6C3.9,7.5,3.1,9.5,3,11.5H1.5C1.2,11.5,1,11.7,1,12c0,0.3,0.2,0.5,0.5,0.5H3c0.1,2.1,1,4,2.3,5.5l-1,1c-0.1,0.1-0.1,0.2-0.1,0.4c0,0.3,0.2,0.5,0.5,0.5c0.1,0,0.3-0.1,0.4-0.1l1-1c1.5,1.3,3.4,2.2,5.5,2.3v1.5c0,0.3,0.2,0.5,0.5,0.5h0c0.3,0,0.5-0.2,0.5-0.5V21c2-0.1,4-0.9,5.5-2.3l4.2,4.2c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.3-0.1,0.4-0.1c0.2-0.2,0.2-0.5,0-0.7L1.9,1.1z M9,9.7l1.4,1.4c-0.2,0.3-0.5,0.5-0.8,0.5c-0.6,0-1-0.4-1-1C8.5,10.2,8.7,9.8,9,9.7z M12.5,20v-3.5c0-0.3-0.2-0.5-0.5-0.5s-0.5,0.2-0.5,0.5V20c-1.7-0.1-3.4-0.8-4.8-2L7,17.7c0,0,0,0,0,0c0.2-0.2,0.2-0.5,0-0.7c-0.2-0.2-0.5-0.2-0.7,0L6,17.3c-1.2-1.4-1.9-3.1-2-4.8h2.5C6.8,12.5,7,12.3,7,12c0-0.3-0.2-0.5-0.5-0.5H4c0.1-1.7,0.8-3.4,2-4.8L8.3,9c-0.5,0.4-0.8,0.9-0.8,1.5c0,1.1,0.9,2,2,2c0.6,0,1.2-0.3,1.5-0.8l6.2,6.2C15.9,19.2,14.2,19.9,12.5,20z M13.5,9c0,0.8,0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5S13.5,8.2,13.5,9z M15.5,9c0,0.3-0.2,0.5-0.5,0.5S14.5,9.3,14.5,9c0-0.3,0.2-0.5,0.5-0.5C15.3,8.5,15.5,8.7,15.5,9z'
  }));
});