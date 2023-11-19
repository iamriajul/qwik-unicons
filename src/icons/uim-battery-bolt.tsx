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
    d: 'M13.988 12.059A1.023 1.023 0 0 0 13 11H9.732l1.444-2.5a1 1 0 1 0-1.733-1l-2.31 4A1.022 1.022 0 0 0 8 13h3.268l-1.444 2.5a1 1 0 0 0 1.733 1l2.31-4a1.267 1.267 0 0 0 .121-.441Z'
  }));
});