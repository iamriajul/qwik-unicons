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
    d: 'M21.80521,10.07661a2.62688,2.62688,0,0,0-1.63256-.42669,5.18884,5.18884,0,0,0-.8441.0742,3.18021,3.18021,0,0,0-1.42849-2.14273l-.28755-.167-.18552.269a3.96681,3.96681,0,0,0-.51017,1.18731,2.81866,2.81866,0,0,0,.33393,2.21694,3.93556,3.93556,0,0,1-1.45631.35248H2.62269a.62152.62152,0,0,0-.62148.62148,9.38612,9.38612,0,0,0,.57511,3.3857A5.07767,5.07767,0,0,0,4.5799,18.05386,8.86828,8.86828,0,0,0,8.97667,19a13.4856,13.4856,0,0,0,2.43956-.22262,10.06816,10.06816,0,0,0,3.1909-1.15949,8.73384,8.73384,0,0,0,2.17055-1.781,11.80949,11.80949,0,0,0,2.12418-3.664h.18552a3.052,3.052,0,0,0,2.23548-.8441,2.47036,2.47036,0,0,0,.59366-.87193L22,10.21574Z'
  }));
});