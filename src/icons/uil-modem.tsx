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
    d: 'M21.48,13.13a.65.65,0,0,0-.05-.2.89.89,0,0,0-.08-.17.86.86,0,0,0-.1-.16l-.16-.13L21,12.38,6.28,3.88a1,1,0,0,0-1,1.74l11.49,6.63H3.5a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3h13a3,3,0,0,0,3-3v-4S21.48,13.17,21.48,13.13Zm-2,4.12a1,1,0,0,1-1,1H5.5a1,1,0,0,1-1-1v-3h15Zm-3,0a1,1,0,1,0-1-1A1,1,0,0,0,16.5,17.25Z'
  }));
});