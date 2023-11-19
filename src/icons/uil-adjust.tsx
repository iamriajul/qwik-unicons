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
    d: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM11,19.93A8,8,0,0,1,11,4.07Zm2,0V4.07a8,8,0,0,1,0,15.86Z'
  }));
});