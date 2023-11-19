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
    d: 'm18.004 9.465-2.936 4.658a1.501 1.501 0 0 1-2.169.4l-2.336-1.752a.6.6 0 0 0-.722.002l-3.157 2.396a.475.475 0 0 1-.688-.632l2.938-4.66a1.501 1.501 0 0 1 2.169-.4l2.336 1.753a.6.6 0 0 0 .722-.002l3.155-2.395a.475.475 0 0 1 .688.632z'
  }));
});