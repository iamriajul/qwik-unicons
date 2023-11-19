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
    d: 'M15.174 17.152a.705.705 0 0 1-1.002.352l-2.715-2.11-1.742 1.608a.3.3 0 0 1-.285.039l.334-2.989.01.009.007-.059s4.885-4.448 5.084-4.637c.202-.189.135-.23.135-.23.012-.23-.361 0-.361 0l-6.473 4.164-2.695-.918s-.414-.148-.453-.475c-.041-.324.466-.5.466-.5l10.717-4.258s.881-.392.881.258l-1.908 9.746z'
  }));
});