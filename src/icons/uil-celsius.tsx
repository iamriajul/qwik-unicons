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
    d: 'M21,19H15a3,3,0,0,1-3-3V8a3,3,0,0,1,3-3h6a1,1,0,0,0,0-2H15a5,5,0,0,0-5,5v8a5,5,0,0,0,5,5h6a1,1,0,0,0,0-2ZM5,3A3,3,0,1,0,8,6,3,3,0,0,0,5,3ZM5,7A1,1,0,1,1,6,6,1,1,0,0,1,5,7Z'
  }));
});