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
    d: 'M10.586 20.485 7.05 16.95a1 1 0 0 1 0-1.414 1 1 0 0 1 1.415 0L12 19.07zm2.828-2.828-2.121-2.121a1 1 0 0 1 0-1.415 1 1 0 0 1 1.414 0l2.122 2.122zm2.829-2.828-3.536-3.536a1 1 0 0 1 0-1.414 1 1 0 0 1 1.414 0l3.536 3.535zM19.07 12 16.95 9.88a1 1 0 0 1 0-1.414 1 1 0 0 1 1.414 0l2.121 2.12z'
  }));
});