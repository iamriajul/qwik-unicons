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
    d: 'M19.5,13.5h-3c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h2.4824219c-0.2487793,3.4717407-3.010376,6.2333984-6.4821167,6.4821167c-0.0001221,0-0.0001831,0-0.0003052,0V11h2c0.276123,0,0.5-0.223877,0.5-0.5S14.776123,10,14.5,10h-2V7.9490967C13.916748,7.7087402,14.9983521,6.4848633,15,5c0-1.6568604-1.3431396-3-3-3S9,3.3431396,9,5c0,1.4855957,1.0823975,2.7104492,2.5,2.949585V10h-2C9.223877,10,9,10.223877,9,10.5S9.223877,11,9.5,11h2v9.9744873C8.0814819,20.7329712,5.2695923,18.0176392,5.0175781,14.5H7.5C7.776123,14.5,8,14.276123,8,14s-0.223877-0.5-0.5-0.5h-3c-0.0001831,0-0.0003662,0-0.0006104,0C4.2234497,13.5001831,3.9998169,13.723999,4,14c0.0050659,4.4161987,3.5838013,7.9949341,8,8c4.4161987-0.0050659,7.9949341-3.5838013,8-8c0-0.0001831,0-0.0003662,0-0.0006104C19.9998169,13.7234497,19.776001,13.4998169,19.5,13.5z M10,5c0-1.1045532,0.8954468-2,2-2c1.1040039,0.0014038,1.9985962,0.8959961,2,2c0,1.1045532-0.8954468,2-2,2S10,6.1045532,10,5z'
  }));
});