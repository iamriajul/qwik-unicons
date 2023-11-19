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
    d: 'M11.441 13.604a1 1 0 0 1-.707-.293L7.198 9.772a1 1 0 0 1 0-1.414l6.363-6.363a.997.997 0 0 1 .39-.242l2.121-.707a1 1 0 0 1 1.024.242l2.122 2.121a1 1 0 0 1 .241 1.024l-.708 2.122a.991.991 0 0 1-.241.39l-6.362 6.366a1 1 0 0 1-.707.293Zm6.362-7.366Z'
  }));
});