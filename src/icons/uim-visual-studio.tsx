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
    d: 'M9.13313,14.2416,4.19906,18.08677,2.04679,17.01489V6.99362L4.19056,5.91323l4.9,3.85368L16.849,2l5.10421,2.03318V19.93279L16.87452,22Zm7.56275,1.35261V8.40579L12.051,12.00425l4.64484,3.59ZM4.3692,14.30115l2.44152-2.22033L4.3692,9.64781Z'
  }));
});