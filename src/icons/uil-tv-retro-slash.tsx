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
    d: 'M11.62,7.92A1,1,0,0,0,12,8h6a1,1,0,0,1,1,1v5.34a1,1,0,1,0,2,0V9a3,3,0,0,0-3-3H14.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76A1,1,0,0,0,11.62,7.92ZM21.71,20.29l-18-18A1,1,0,0,0,2.29,3.71L4.83,6.24A3,3,0,0,0,3,9v8a3,3,0,0,0,3,3v1a1,1,0,0,0,2,0V20h8v1a1,1,0,0,0,2,0V20a3.07,3.07,0,0,0,.53-.06l1.76,1.77a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM6,18a1,1,0,0,1-1-1V9A1,1,0,0,1,6,8h.59l10,10Z'
  }));
});