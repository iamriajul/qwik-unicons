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
    d: 'M9.9,2H8.1C8.00154,2.32358,7.96757,2.66333,8,3v18c-0.03243,0.33667,0.00154,0.67642,0.1,1h1.8c0.09846-0.32358,0.13243-0.66333,0.1-1V3C10.03243,2.66333,9.99846,2.32358,9.9,2z'
  }));
});