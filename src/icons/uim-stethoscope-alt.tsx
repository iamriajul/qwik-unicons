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
    d: 'M8 15a.998.998 0 0 1-.625-.22l-3.499-2.798A4.975 4.975 0 0 1 2 8.078V3a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4v4.078a2.985 2.985 0 0 0 1.126 2.342L8 12.72l2.875-2.3A2.986 2.986 0 0 0 12 8.078V4h-1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v5.078a4.976 4.976 0 0 1-1.876 3.904l-3.5 2.799A.998.998 0 0 1 8 15zm11-1a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3z'
  }));
});