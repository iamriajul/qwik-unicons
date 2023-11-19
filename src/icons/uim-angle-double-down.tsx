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
    d: 'M12 11.75a.997.997 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L12 9.336l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a.997.997 0 0 1-.707.293zm0 5.5a.997.997 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L12 14.836l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a.997.997 0 0 1-.707.293z'
  }));
});