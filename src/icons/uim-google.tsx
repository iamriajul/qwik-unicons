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
    d: 'M12.22182,5.97728c1.42137-0.02391,2.79488,0.51341,3.82273,1.49545l2.86819-2.86818c-1.81006-1.7-4.20788-2.63339-6.69092-2.60455C8.44087,1.99855,4.98265,4.13047,3.28544,7.5091L6.62636,10.1C7.41416,7.66784,9.66545,6.00909,12.22182,5.97728z'
  }));
});