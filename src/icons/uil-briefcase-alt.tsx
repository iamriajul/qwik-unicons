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
    d: 'M19,6.5H16v-1a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v1H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,6.5Zm-9-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1H10Zm10,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a21.27,21.27,0,0,0,3,.94v.59a1,1,0,0,0,2,0v-.21a23,23,0,0,0,3,.21,23,23,0,0,0,3-.21v.21a1,1,0,0,0,2,0v-.59A21.27,21.27,0,0,0,20,13Zm0-7.69a20.39,20.39,0,0,1-3,1V11.5a1,1,0,0,0-2,0v.74a20.11,20.11,0,0,1-6,0V11.5a1,1,0,0,0-2,0v.33a20.39,20.39,0,0,1-3-1V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z'
  }));
});