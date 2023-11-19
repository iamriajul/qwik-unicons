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
    d: 'M16.5,7h-9C7.2236328,7,7,7.2236328,7,7.5v9C7,16.7763672,7.2236328,17,7.5,17h9c0.2763672,0,0.5-0.2236328,0.5-0.5v-9C17,7.2236328,16.7763672,7,16.5,7z M16,16H8V8h8V16z M21,19.0921021V4.9078979C21.5807495,4.7008057,22,4.151001,22,3.5C22,2.6728516,21.3271484,2,20.5,2c-0.651001,0-1.2008057,0.4192505-1.4078979,1H4.9078979C4.7008057,2.4192505,4.151001,2,3.5,2C2.6728516,2,2,2.6728516,2,3.5c0,0.651001,0.4192505,1.2008057,1,1.4078979v14.1842041C2.4192505,19.2991943,2,19.848999,2,20.5C2,21.3271484,2.6728516,22,3.5,22c0.651001,0,1.2008057-0.4192505,1.4078979-1h14.1842041c0.2070923,0.5807495,0.756897,1,1.4078979,1c0.8271484,0,1.5-0.6728516,1.5-1.5C22,19.848999,21.5807495,19.2991943,21,19.0921021z M20.5,3C20.7753906,3,21,3.2246094,21,3.5S20.7753906,4,20.5,4S20,3.7753906,20,3.5S20.2246094,3,20.5,3z M3.5,3C3.7753906,3,4,3.2246094,4,3.5S3.7753906,4,3.5,4S3,3.7753906,3,3.5S3.2246094,3,3.5,3z M3.5,21C3.2246094,21,3,20.7753906,3,20.5S3.2246094,20,3.5,20S4,20.2246094,4,20.5S3.7753906,21,3.5,21z M19.0901489,20.0062866C19.0897217,20.0056152,19.0859375,20,19.0859375,20H4.9140625c0,0-0.0037842,0.0056152-0.0042114,0.0062866c-0.1506958-0.4285278-0.4876099-0.7654419-0.9161377-0.9161377C3.9943848,19.0897217,4,19.0859375,4,19.0859375V4.9140625c0,0-0.0056152-0.0037842-0.0062866-0.0042114c0.4285278-0.1506958,0.7654419-0.4876099,0.9161377-0.9161377C4.9102783,3.9943848,4.9140625,4,4.9140625,4h14.171875c0,0,0.0037842-0.0056152,0.0042114-0.0062866c0.1506958,0.4285278,0.4876099,0.7654419,0.9161377,0.9161377C20.0056152,4.9102783,20,4.9140625,20,4.9140625v14.171875c0,0,0.0056152,0.0037842,0.0062866,0.0042114C19.5777588,19.2408447,19.2408447,19.5777588,19.0901489,20.0062866z M20.5,21c-0.2753906,0-0.5-0.2246094-0.5-0.5s0.2246094-0.5,0.5-0.5s0.5,0.2246094,0.5,0.5S20.7753906,21,20.5,21z'
  }));
});