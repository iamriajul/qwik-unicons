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
    d: 'm18.333 10.922-.11-.222-.178-.14c-.235-.184-1.423.011-1.742-.278-.228-.208-.263-.584-.33-1.09a3.154 3.154 0 0 0-.362-1.367 4.46 4.46 0 0 0-3.12-2.2H9.667a4.053 4.053 0 0 0-4.042 4.03v4.695a4.05 4.05 0 0 0 4.042 4.025h4.639a4.052 4.052 0 0 0 4.038-4.022l.02-2.675.005-.579-.036-.177zM9.718 8.917h2.24a.77.77 0 0 1 0 1.541h-2.24a.77.77 0 0 1 0-1.541zm4.55 6.125h-4.55a.75.75 0 1 1 0-1.5h4.55a.75.75 0 1 1 0 1.5z'
  }));
});