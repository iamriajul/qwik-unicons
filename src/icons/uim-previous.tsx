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
    d: 'M16 17a.99676.99676 0 0 1-.707-.293l-4-4a.99962.99962 0 0 1 0-1.41406l4-4A.99989.99989 0 0 1 16.707 8.707L13.41406 12l3.293 3.293A1 1 0 0 1 16 17zM8 17a1 1 0 0 1-1-1V8A1 1 0 0 1 9 8v8A1 1 0 0 1 8 17z'
  }));
});