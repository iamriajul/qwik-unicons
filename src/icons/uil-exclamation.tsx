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
    d: 'M12,14a1,1,0,0,0,1-1V7a1,1,0,0,0-2,0v6A1,1,0,0,0,12,14Zm0,4a1.25,1.25,0,1,0-1.25-1.25A1.25,1.25,0,0,0,12,18Z'
  }));
});