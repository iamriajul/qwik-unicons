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
    d: 'M12,2a10,10,0,0,0-2.14.24l-.12,0a10,10,0,0,0-.1,19.44l.14,0A9.57,9.57,0,0,0,12,22,10,10,0,0,0,12,2ZM10,19.74A8,8,0,0,1,10,4.26a8,8,0,0,1,0,15.48Zm4.53-.16a10,10,0,0,0,0-15.16,8,8,0,0,1,0,15.16Z'
  }));
});