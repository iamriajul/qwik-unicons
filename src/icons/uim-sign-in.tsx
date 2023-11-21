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
    d: 'M20,11H11.41406l2.293-2.293A.99989.99989,0,0,0,12.293,7.293l-4,4a.99962.99962,0,0,0,0,1.41406l4,4A.99989.99989,0,0,0,13.707,15.293L11.41406,13H20Z'
  }));
});