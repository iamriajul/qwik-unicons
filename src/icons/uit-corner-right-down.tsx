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
    d: 'M21.8534546,14.1587524c-0.1918335-0.1986084-0.5083618-0.2041016-0.7069702-0.0122681L17,18.2929688V9.3886719C16.9972534,6.9660034,15.0339966,5.0027466,12.6113281,5H3.5C3.223877,5,3,5.223877,3,5.5S3.223877,6,3.5,6h9.1113281C14.4818726,6.0023804,15.9976196,7.5181274,16,9.3886719v8.9042969l-4.1465454-4.1464233c-0.1937256-0.1871338-0.5009155-0.1871338-0.6947021,0c-0.1986084,0.1918335-0.2041016,0.5083618-0.0122681,0.7069702l4.9995728,4.9995728c0.0458984,0.0459595,0.1005859,0.0828247,0.161377,0.1082153C16.3678589,19.9865112,16.4332275,20.0001221,16.5,20c0.0001831,0,0.0003662,0,0.0006104,0c0.0106201,0,0.0195312-0.0053711,0.0299683-0.0060425c0.0558472-0.003479,0.1112671-0.0115356,0.1621704-0.0328369c0.0610352-0.0255127,0.1159058-0.062561,0.1618652-0.1087646l4.9988403-4.9988403C22.0406494,14.659729,22.0406494,14.3525391,21.8534546,14.1587524z'
  }));
});