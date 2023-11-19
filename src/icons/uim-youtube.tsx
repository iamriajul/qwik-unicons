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
    d: 'M15.663 11.775c-2.017-1.078-3.948-2.078-5.922-3.112v6.19c2.077-1.13 4.267-2.164 5.931-3.087l-.009.009z'
  }));
});