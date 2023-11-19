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
    d: 'M17.03363,2.9765C15.461,2.13947,14.3703,2,11.79584,2H6V14.12427h5.77045c2.29547,0,4.00763-.13953,5.51678-1.14142A5.769,5.769,0,0,0,19.78564,7.986,5.48737,5.48737,0,0,0,17.03363,2.9765Zm-4.591,8.61133h-3.513v-6.988l3.31006-.02539c3.01837-.038,4.52758,1.02729,4.52758,3.43695C16.76727,10.59857,14.903,11.58783,12.44263,11.58783Z'
  }));
});