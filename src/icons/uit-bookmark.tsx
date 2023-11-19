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
    d: 'M16,2H8C6.3438721,2.0018311,5.0018311,3.3438721,5,5v16.5c0.0001221,0.0870972,0.0230103,0.1727295,0.0663452,0.248291C5.2039795,21.9882202,5.5100708,22.071167,5.75,21.9335938L12,18.3339844l6.25,3.5996094C18.3262329,21.9768677,18.4123535,21.9997559,18.5,22c0.2759399-0.0004883,0.4995117-0.2240601,0.5-0.5V5C18.9981689,3.3438721,17.6561279,2.0018311,16,2z M18,20.6347656l-5.75-3.3115234c-0.0762329-0.0432739-0.1623535-0.0661621-0.25-0.0664062c-0.0876465,0.0002441-0.1737671,0.0231323-0.25,0.0664062L6,20.6347656V5c0.0014038-1.1040039,0.8959961-1.9985962,2-2h8c1.1040039,0.0014038,1.9985962,0.8959961,2,2V20.6347656z'
  }));
});