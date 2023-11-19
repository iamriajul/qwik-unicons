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
    d: 'M23,9.5A3.50424,3.50424,0,0,0,19.5,6a3.45946,3.45946,0,0,0-1.5.35107V4.5a3.49466,3.49466,0,0,0-6-2.44171A3.48676,3.48676,0,0,0,6.35107,6H4.5a3.49466,3.49466,0,0,0-2.44171,6A3.48676,3.48676,0,0,0,6,17.64893V19.5a3.49466,3.49466,0,0,0,6,2.44171A3.48676,3.48676,0,0,0,17.64893,18H19.5a3.49466,3.49466,0,0,0,2.44171-6A3.48559,3.48559,0,0,0,23,9.5Zm-10-5a1.5,1.5,0,0,1,3,0v5a1.5,1.5,0,0,1-3,0Zm-7,10A1.5,1.5,0,1,1,4.5,13H6Zm5,5a1.5,1.5,0,0,1-3,0v-5a1.5,1.5,0,0,1,3,0ZM9.5,11h-5a1.5,1.5,0,0,1,0-3h5a1.5,1.5,0,0,1,0,3ZM11,6H9.5A1.5,1.5,0,1,1,11,4.5Zm1,6.05829c-.01935-.01978-.03851-.03894-.05829-.05829.01978-.01935.03894-.03851.05829-.05829.01935.01978.03851.03894.05829.05829C12.03851,12.01935,12.01935,12.03851,12,12.05829ZM14.5,21A1.50164,1.50164,0,0,1,13,19.5V18h1.5a1.5,1.5,0,0,1,0,3Zm5-5h-5a1.5,1.5,0,0,1,0-3h5a1.5,1.5,0,0,1,0,3Zm0-5H18V9.5A1.5,1.5,0,1,1,19.5,11Z'
  }));
});