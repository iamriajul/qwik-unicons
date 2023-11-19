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
    d: 'M15.1113281,7.5H5.7089844l4.6464844-4.6464844c0.1905518-0.194397,0.1905518-0.5054321,0-0.6998291c-0.1932373-0.1972046-0.5097656-0.2004395-0.7069702-0.0071411l-5.5,5.5c-0.000061,0-0.0001221,0.000061-0.0001831,0.0001221C3.953186,7.8419189,3.9532471,8.1583862,4.1484985,8.3535156l5.5,5.5C9.7421265,13.9474487,9.8693848,14.0001831,10.0020142,14c0.1325684,0,0.2596436-0.0526733,0.3533936-0.1464233c0.1953125-0.1952515,0.1953125-0.5118408,0.000061-0.7070923L5.7089844,8.5h9.4023438C16.9818726,8.5023804,18.4976196,10.0181274,18.5,11.8886719v9.6118774C18.5001831,21.7765503,18.723999,22.0001831,19,22h0.0006104c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5v-9.6113281C19.4972534,9.4660034,17.5339966,7.5027466,15.1113281,7.5z'
  }));
});