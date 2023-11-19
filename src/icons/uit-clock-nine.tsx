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
    d: 'M12,6c-0.276123,0-0.5,0.223877-0.5,0.5v5h-3C8.223877,11.5,8,11.723877,8,12s0.223877,0.5,0.5,0.5H12c0.0001831,0,0.0003662,0,0.0006104,0C12.2765503,12.4998169,12.5001831,12.276001,12.5,12V6.5C12.5,6.223877,12.276123,6,12,6z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z'
  }));
});