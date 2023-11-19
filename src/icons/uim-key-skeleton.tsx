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
    d: 'M7,12.00049c-2.76142,0-5,2.23858-5,5s2.23858,5,5,5s5-2.23858,5-5S9.76142,12.00049,7,12.00049z M5.58527,19.4129c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1s1,0.44772,1,1C6.58461,18.96491,6.13728,19.41224,5.58527,19.4129z'
  }));
});