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
    d: 'M17.594 12.625a4.523 4.523 0 0 1 2.162-3.805 4.672 4.672 0 0 0-3.658-1.984c-1.558-.158-3.04.917-3.83.917-.789 0-2.008-.894-3.3-.87A4.896 4.896 0 0 0 4.83 9.392c-1.763 3.06-.45 7.593 1.267 10.076.84 1.214 1.843 2.581 3.158 2.532 1.268-.05 1.746-.82 3.277-.82 1.53 0 1.961.82 3.3.795 1.364-.025 2.229-1.239 3.062-2.457a10.946 10.946 0 0 0 1.384-2.845 4.42 4.42 0 0 1-2.684-4.047Z'
  }));
});