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
    d: 'm17.737 14.622-2.426 2.23a11.603 11.603 0 0 1-4.299 2.37l.644 3.004a1 1 0 0 0 1.469.661l3.905-2.202a3.035 3.035 0 0 0 1.375-3.304zM7.266 8.776l2.088-2.48-2.604-.628a2.777 2.777 0 0 0-3.387 1.357l-2.2 3.9a1 1 0 0 0 .661 1.469l3.073.659a12.887 12.887 0 0 1 2.369-4.277zm9.468.04a1.5 1.5 0 1 0-1.5-1.5 1.5 1.5 0 0 0 1.5 1.5z'
  }));
});