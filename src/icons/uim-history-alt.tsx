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
    d: 'M12,2A10.01687,10.01687,0,0,0,5,4.87714V3A1,1,0,0,0,3,3V7.5a.99974.99974,0,0,0,1,1H8.5a1,1,0,0,0,0-2H6.21844A7.99161,7.99161,0,1,1,12,20a1,1,0,0,0,0,2A10,10,0,0,0,12,2Z'
  }));
});