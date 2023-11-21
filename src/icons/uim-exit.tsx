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
    d: 'M15.707,11.293l-4-4A.99989.99989,0,0,0,10.293,8.707L12.58594,11H4v2h8.58594l-2.293,2.293A.99989.99989,0,1,0,11.707,16.707l4-4A.99962.99962,0,0,0,15.707,11.293Z'
  }));
});