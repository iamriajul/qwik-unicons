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
    d: 'M21.8534546,2.1587524c-0.1918335-0.1986084-0.5083618-0.2041016-0.7069702-0.0122681l-5.4326172,5.4321899c-0.0072632,0.0065918-0.0167847,0.0089722-0.0237427,0.0161133c-0.0062866,0.0064087-0.0081787,0.0150757-0.0140991,0.0217285l-6.381958,6.3814087C8.5245361,13.3829956,7.5617065,13,6.5,13C4.0147095,13,2,15.0147095,2,17.5S4.0147095,22,6.5,22c2.4841309-0.0026855,4.4973145-2.0158691,4.5-4.5c0-1.0621948-0.3833618-2.0253906-0.9988403-2.795105l6.0498657-6.0493774l1.767334,1.767334c0.0936279,0.0939331,0.2208862,0.1466675,0.3535156,0.1464844v0.000061c0.1325684-0.000061,0.2596436-0.0527344,0.3533936-0.1464233c0.1953125-0.1952515,0.1953125-0.5118408,0.0001221-0.7071533l-1.767334-1.767334l2.1216431-2.121521l1.7677612,1.7677612c0.093689,0.0939331,0.2208862,0.1466675,0.3535156,0.1464844c0.1325684,0,0.2597046-0.0526733,0.3533936-0.1463623c0.1953125-0.1952515,0.1953735-0.5118408,0.0001221-0.7070923L19.586792,5.1199951l2.2666626-2.2665405C22.0406494,2.659729,22.0406494,2.3525391,21.8534546,2.1587524z M6.5,21C4.5670166,21,3,19.4329834,3,17.5S4.5670166,14,6.5,14c1.9320068,0.0023193,3.4976807,1.5679932,3.5,3.5C10,19.4329834,8.4329834,21,6.5,21z'
  }));
});