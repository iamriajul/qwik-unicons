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
    d: 'M9.41,8H17a1,1,0,0,0,0-2H7a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54A1,1,0,0,0,6,7V17a1,1,0,0,0,2,0V9.41l8.29,8.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'
  }));
});