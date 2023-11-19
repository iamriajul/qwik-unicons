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
    d: 'M2,3.9v16.2c0,1,0.9,1.9,1.9,1.9H8V2H3.9C2.9,2,2,2.9,2,3.9z M20.1,2H16v20h4.1c1,0,1.9-0.9,1.9-1.9V3.9C22,2.9,21.1,2,20.1,2z M10,22h4V2h-4V22z'
  }));
});