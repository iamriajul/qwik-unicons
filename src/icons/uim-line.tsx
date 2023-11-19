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
    d: 'M18.223 14.278c-.041.06-.087.116-.136.17l-.004.004a6.36 6.36 0 0 1-.798.796c-2.03 1.876-5.37 4.109-5.81 3.764-.383-.299.63-1.764-.54-2.007a9.241 9.241 0 0 1-.243-.031h-.002c-3.437-.489-6.047-2.893-6.047-5.785 0-3.245 3.285-5.876 7.338-5.876s7.337 2.63 7.337 5.876a5.021 5.021 0 0 1-1.095 3.089z'
  }));
});