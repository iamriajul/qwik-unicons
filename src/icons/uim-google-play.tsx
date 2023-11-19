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
    d: 'm14.556 12.895 2.573 2.554 3.785-2.186c.506-.253.83-.766.842-1.332a1.474 1.474 0 0 0-.837-1.275c-.315-.17-3.01-1.734-4.023-2.323l-.002-.002L4.639 1.256a1.644 1.644 0 0 0-1.657-.06c-.05.034-.097.071-.142.111l11.716 11.588z'
  }));
});