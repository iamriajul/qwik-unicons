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
    d: 'M19.8515015,7.6465454l-5.5-5.5c-0.1943359-0.1905518-0.5054321-0.1905518-0.6998291,0c-0.1972046,0.1932373-0.2003784,0.5097656-0.0071411,0.7069702L18.2910156,7.5H8.8886719C6.4660034,7.5027466,4.5027466,9.4660034,4.5,11.8886719V21.5c0,0.0001831,0,0.0003662,0,0.0005493C4.5001831,21.7765503,4.723999,22.0001831,5,22c0.0001831,0,0.0003662,0,0.0006104,0C5.2765503,21.9998169,5.5001831,21.776001,5.5,21.5v-9.6113281C5.5023804,10.0181274,7.0181274,8.5023804,8.8886719,8.5h9.4023438l-4.6464844,4.6464844c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546c0,0.276123,0.2238159,0.5,0.499939,0.500061c0.1326294,0.0001221,0.2598267-0.0525513,0.3534546-0.1464844l5.5-5.5c0.000061-0.000061,0.0001221-0.0001221,0.0001831-0.0001831C20.046814,8.1581421,20.0467529,7.8416748,19.8515015,7.6465454z'
  }));
});