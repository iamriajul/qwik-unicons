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
    d: 'M2 12a9.796 9.796 0 0 1 1.34-5.02 9.93 9.93 0 0 1 3.64-3.64A9.796 9.796 0 0 1 12 2a9.796 9.796 0 0 1 5.02 1.34 9.929 9.929 0 0 1 3.64 3.64A9.796 9.796 0 0 1 22 12a9.796 9.796 0 0 1-1.34 5.02 9.929 9.929 0 0 1-3.64 3.64A9.796 9.796 0 0 1 12 22a9.796 9.796 0 0 1-5.02-1.34 9.93 9.93 0 0 1-3.64-3.64A9.796 9.796 0 0 1 2 12zm1.66 0a8.064 8.064 0 0 0 2.1 5.5c.755-1.39 1.79-2.61 3.04-3.58a9.942 9.942 0 0 1 4.06-2.14c-.2-.467-.393-.887-.58-1.26a24.3 24.3 0 0 1-7.44 1.1c-.52 0-.907-.007-1.16-.02 0 .053-.003.12-.01.2s-.01.147-.01.2zm.26-2.06c.293.027.727.04 1.3.04a21.95 21.95 0 0 0 6.34-.9 20.251 20.251 0 0 0-3.34-4.5A8.12 8.12 0 0 0 5.51 6.8a8.539 8.539 0 0 0-1.59 3.14zm2.98 8.64a8.173 8.173 0 0 0 8.04 1.2 29.368 29.368 0 0 0-1.56-6.62 8.53 8.53 0 0 0-3.71 2.02 11.345 11.345 0 0 0-2.77 3.4zM9.96 3.94a21.254 21.254 0 0 1 3.26 4.54 9.96 9.96 0 0 0 4.1-2.9A8.107 8.107 0 0 0 12 3.66a7.677 7.677 0 0 0-2.04.28zm3.98 5.96c.2.427.427.967.68 1.62.987-.093 2.06-.14 3.22-.14.827 0 1.647.02 2.46.06a8.03 8.03 0 0 0-1.96-4.84 9.896 9.896 0 0 1-4.4 3.3zm1.18 3.02c.68 1.97 1.142 4.01 1.38 6.08a8.345 8.345 0 0 0 2.58-2.62 8.078 8.078 0 0 0 1.2-3.46c-.973-.067-1.86-.1-2.66-.1-.733 0-1.567.033-2.5.1z'
  }));
});