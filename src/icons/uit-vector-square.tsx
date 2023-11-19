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
    d: 'M19.5,16.050415V7.9490967C20.916748,7.7087402,21.9983521,6.4848633,22,5c0-1.6568604-1.3431396-3-3-3c-1.4855957,0-2.7104492,1.0823975-2.949585,2.5H7.949585C7.7104492,3.0823975,6.4855957,2,5,2C3.3431396,2,2,3.3431396,2,5c0,1.4855957,1.0823975,2.7104492,2.5,2.949585v8.1008301C3.0823975,16.2895508,2,17.5144043,2,19c0,1.6568604,1.3431396,3,3,3c1.4848633-0.0016479,2.7087402-1.083252,2.9490967-2.5h8.1013184C16.2895508,20.9176025,17.5144043,22,19,22c1.6561279-0.0018311,2.9981689-1.3438721,3-3C22,17.5144043,20.9176025,16.2895508,19.5,16.050415z M19,3c1.1040039,0.0014038,1.9985962,0.8959961,2,2c0,1.1045532-0.8954468,2-2,2s-2-0.8954468-2-2S17.8954468,3,19,3z M3,5c0-1.1045532,0.8954468-2,2-2c1.1040039,0.0014038,1.9985962,0.8959961,2,2c0,1.1045532-0.8954468,2-2,2S3,6.1045532,3,5z M5,21c-1.1045532,0-2-0.8954468-2-2s0.8954468-2,2-2c1.1040039,0.0014038,1.9985962,0.8959961,2,2C7,20.1045532,6.1045532,21,5,21z M16.050415,18.5H7.949585C7.7380371,17.2458496,6.7541504,16.2619629,5.5,16.050415V7.9490967C6.7532959,7.7364502,7.7364502,6.7532959,7.9490967,5.5h8.1013184C16.2619629,6.7541504,17.2458496,7.7380371,18.5,7.949585v8.1008301C17.2458496,16.2619629,16.2619629,17.2458496,16.050415,18.5z M19,21c-1.1045532,0-2-0.8954468-2-2s0.8954468-2,2-2c1.1040039,0.0014038,1.9985962,0.8959961,2,2C21,20.1045532,20.1045532,21,19,21z'
  }));
});