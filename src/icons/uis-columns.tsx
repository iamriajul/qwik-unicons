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
    d: 'M2,3v18c0,0.6,0.4,1,1,1h8V2H3C2.4,2,2,2.4,2,3z M21,2h-8v20h8c0.6,0,1-0.4,1-1V3C22,2.4,21.6,2,21,2z'
  }));
});