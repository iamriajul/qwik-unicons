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
    d: 'M17.544 19.985a.192.192 0 0 1 .048.116c0 .058-.055.098-.124.098a7.539 7.539 0 0 1-2.857-1.518.538.538 0 0 0-.488-.08 9.98 9.98 0 0 1-2.123.227c-4.597 0-8.323-3.076-8.323-6.873 0-3.794 3.726-6.87 8.323-6.87s8.323 3.076 8.323 6.87a6.566 6.566 0 0 1-3.374 5.526.546.546 0 0 0-.282.438 4.667 4.667 0 0 0 .877 2.066Z'
  }));
});