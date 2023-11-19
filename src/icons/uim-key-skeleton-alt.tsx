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
    d: 'M6.99927,12c-2.76142,0-5,2.23858-5,5s2.23858,5,5,5s5-2.23858,5-5l0,0C11.99927,14.23858,9.76069,12,6.99927,12z M5.58453,19.41241c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1s1,0.44772,1,1C6.5839,18.96444,6.13655,19.41178,5.58453,19.41241z'
  }));
});