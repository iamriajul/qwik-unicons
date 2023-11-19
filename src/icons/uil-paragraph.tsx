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
    d: 'M13,13.5H3a1,1,0,0,0,0,2H13a1,1,0,0,0,0-2Zm8-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z'
  }));
});