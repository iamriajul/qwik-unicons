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
    d: 'M12,6.5c-0.276123,0-0.5,0.223877-0.5,0.5v4.8740234L10.0595703,14.5625c-0.0001221,0.0002441-0.0002441,0.0004272-0.0003662,0.0006714c-0.130249,0.2431641-0.0386963,0.5458374,0.2044678,0.6760864c0.0725098,0.0394287,0.1538086,0.0598755,0.2363281,0.0595703c0.1842041,0.000061,0.3534546-0.1013184,0.4404297-0.2636719l1.5-2.7988281C12.4793701,12.1636353,12.4998779,12.0824585,12.5,12V7C12.5,6.723877,12.276123,6.5,12,6.5z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z'
  }));
});