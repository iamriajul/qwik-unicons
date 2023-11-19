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
    d: 'M5.086 9.711h3.002v9.031H5.086zM6.587 8.478h-.02a1.565 1.565 0 1 1 .04-3.12 1.565 1.565 0 1 1-.02 3.12zm12.325 10.264H15.91v-4.83c0-1.215-.434-2.043-1.52-2.043a1.643 1.643 0 0 0-1.54 1.098c-.078.236-.111.484-.1.732v5.043H9.75c0-.003.04-8.184 0-9.03h3.002v1.28a2.978 2.978 0 0 1 2.705-1.493c1.975 0 3.456 1.291 3.456 4.065v5.178z'
  }));
});