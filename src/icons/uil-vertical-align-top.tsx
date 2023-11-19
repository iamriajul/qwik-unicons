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
    d: 'M21,2H3A1,1,0,0,0,3,4H6V21a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V16h3a1,1,0,0,0,1-1V4h3a1,1,0,0,0,0-2ZM12,20H8V4h4Zm4-6H14V4h2Z'
  }));
});