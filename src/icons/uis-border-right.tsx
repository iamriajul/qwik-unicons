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
    d: 'M20.5,3c-0.6,0-1,0.4-1,1v16c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1V4C21.5,3.4,21.1,3,20.5,3z M16.5,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S17.1,11,16.5,11z M12.5,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S13.1,11,12.5,11z M8.5,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S9.1,11,8.5,11z M4.5,11c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S5.1,11,4.5,11z M16.5,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S17.1,19,16.5,19z M12.5,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S13.1,19,12.5,19z M8.5,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S9.1,19,8.5,19z M4.5,19c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S5.1,19,4.5,19z M4.5,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S5.1,15,4.5,15z M4.5,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S5.1,7,4.5,7z M12.5,15c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S13.1,15,12.5,15z M12.5,7c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S13.1,7,12.5,7z M16.5,3c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S17.1,3,16.5,3z M12.5,3c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S13.1,3,12.5,3z M8.5,3c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S9.1,3,8.5,3z M4.5,3c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S5.1,3,4.5,3z'
  }));
});