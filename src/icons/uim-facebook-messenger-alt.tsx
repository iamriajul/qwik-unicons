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
    d: 'M12 2a9.651 9.651 0 0 0-10 9.7 9.49 9.49 0 0 0 3.14 7.175.806.806 0 0 1 .27.57l.055 1.779a.801.801 0 0 0 1.122.708l1.984-.875a.798.798 0 0 1 .534-.04A10.876 10.876 0 0 0 12 21.4 9.705 9.705 0 1 0 12 2Z'
  }));
});