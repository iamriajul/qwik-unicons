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
    d: 'M12.00039,6.86511A5.13489,5.13489,0,1,0,17.13528,12,5.13479,5.13479,0,0,0,12.00039,6.86511Zm0,8.46846A3.3336,3.3336,0,1,1,15.334,12,3.33317,3.33317,0,0,1,12.00039,15.33357Z'
  }));
});