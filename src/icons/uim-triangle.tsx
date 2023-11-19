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
    d: 'M21,20.794H3a1,1,0,0,1-.86621-1.5l9-15.5879a1.04009,1.04009,0,0,1,1.73242,0l9,15.5879A1,1,0,0,1,21,20.794Z'
  }));
});