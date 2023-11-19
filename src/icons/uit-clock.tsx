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
    d: 'M14.8476562,13.0673828L12.5,11.7109375V7c0-0.276123-0.223877-0.5-0.5-0.5S11.5,6.723877,11.5,7v5c0.000061,0.1785278,0.0953369,0.3434448,0.25,0.4326172l2.5976562,1.5c0.0759277,0.0441895,0.1621704,0.0674438,0.25,0.0673828c0.1783447-0.0001221,0.3430786-0.0952148,0.432373-0.2495728C15.1682739,13.5114746,15.0866699,13.2056274,14.8476562,13.0673828z M12,2C6.4771729,2,2,6.4771729,2,12s4.4771729,10,10,10c5.5201416-0.0064697,9.9935303-4.4798584,10-10C22,6.4771729,17.5228271,2,12,2z M12,21c-4.9705811,0-9-4.0294189-9-9s4.0294189-9,9-9c4.9683228,0.0054321,8.9945679,4.0316772,9,9C21,16.9705811,16.9705811,21,12,21z'
  }));
});