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
    d: 'M20.476 9.287 12.337 12H4.5a1 1 0 0 0-.938 1.348l1.448 3.895c.012.034.027.067.043.099A2.984 2.984 0 0 0 7.736 19H12.5a1 1 0 0 0 .32-.052l5.864-1.978.616-2.319-5.8 1.956v-2.886l6.634-2.211.333-1.254A1.031 1.031 0 0 0 20.5 10v-.228c0-.163-.014-.324-.024-.485Z'
  }));
});