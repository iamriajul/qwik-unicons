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
    d: 'M16.53 10.091 21 12.939l-4.502 2.868L12 12.941l-4.498 2.866L3 12.939l4.47-2.848L3 7.243l4.502-2.868L12 7.241l4.498-2.866L21 7.243z'
  }));
});