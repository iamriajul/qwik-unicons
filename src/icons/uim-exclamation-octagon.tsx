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
    d: 'M15.728 22H8.272a1 1 0 0 1-.707-.293l-5.272-5.272A1 1 0 0 1 2 15.728V8.272a1 1 0 0 1 .293-.707l5.272-5.272A1 1 0 0 1 8.272 2h7.456a1 1 0 0 1 .707.293l5.272 5.272a1 1 0 0 1 .293.707v7.456a1 1 0 0 1-.293.707l-5.272 5.272a1 1 0 0 1-.707.293Z'
  }));
});