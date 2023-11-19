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
    d: 'm16.2 4.7.7-1.2c.2-.5.1-1.1-.4-1.4-.5-.2-1.1-.1-1.4.4l-.6 1.1c.6.2 1.2.6 1.7 1.1zM7.8 4.7c.5-.5 1-.8 1.7-1.1l-.6-1.1c-.3-.5-.9-.6-1.4-.4s-.6.9-.4 1.4l.7 1.2zM6 9h12v2H6z'
  }));
});