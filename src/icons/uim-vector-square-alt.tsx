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
    d: 'M4 22a2 2 0 1 1 2-2 2.003 2.003 0 0 1-2 2zm0-2.002zM4 6a2 2 0 1 1 2-2 2.003 2.003 0 0 1-2 2zm0-2.002zM20 6a2 2 0 1 1 2-2 2.003 2.003 0 0 1-2 2zm0-2.002zM20 22a2 2 0 1 1 2-2 2.003 2.003 0 0 1-2 2zm0-2.002z'
  }));
});