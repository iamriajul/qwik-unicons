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
    d: 'M17,7h1V8a1,1,0,0,0,2,0V7h1a1,1,0,0,0,0-2H20V4a1,1,0,0,0-2,0V5H17a1,1,0,0,0,0,2Zm4,4a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.41L9.88,14.3a3,3,0,0,0,4.24,0l2.47-2.47a1,1,0,0,0-1.42-1.42L12.7,12.88a1,1,0,0,1-1.4,0L5.41,7H13a1,1,0,0,0,0-2H5A3,3,0,0,0,2,8V18a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V12A1,1,0,0,0,21,11Z'
  }));
});