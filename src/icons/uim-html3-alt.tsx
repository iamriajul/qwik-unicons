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
    d: 'M11.99 22a1.001 1.001 0 0 1-.268-.037l-6.473-1.805a1 1 0 0 1-.728-.874L3.08 3.09A1 1 0 0 1 4.075 2h15.85a1 1 0 0 1 .996 1.089l-1.443 16.188a.999.999 0 0 1-.728.874l-6.491 1.812a1.001 1.001 0 0 1-.269.037Z'
  }));
});