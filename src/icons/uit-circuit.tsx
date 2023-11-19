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
    d: 'M10,12.5c-0.8284302,0-1.5,0.6715698-1.5,1.5s0.6715698,1.5,1.5,1.5c0.828064-0.0009155,1.4990845-0.671936,1.5-1.5C11.5,13.1715698,10.8284302,12.5,10,12.5z M10,14.5c-0.276123,0-0.5-0.223877-0.5-0.5s0.223877-0.5,0.5-0.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5C10.5,14.276123,10.276123,14.5,10,14.5z M10,8.5c-0.8284302,0-1.5,0.6715698-1.5,1.5s0.6715698,1.5,1.5,1.5c0.828064-0.0009155,1.4990845-0.671936,1.5-1.5C11.5,9.1715698,10.8284302,8.5,10,8.5z M10,10.5c-0.276123,0-0.5-0.223877-0.5-0.5S9.723877,9.5,10,9.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5C10.5,10.276123,10.276123,10.5,10,10.5z M21.5,12.5c0.276123,0,0.5-0.223877,0.5-0.5s-0.223877-0.5-0.5-0.5H19v-3h2.5C21.776123,8.5,22,8.276123,22,8s-0.223877-0.5-0.5-0.5H19c-0.0012817-1.380188-1.119812-2.4987183-2.5-2.5V2.5C16.5,2.223877,16.276123,2,16,2s-0.5,0.223877-0.5,0.5V5h-3V2.5C12.5,2.223877,12.276123,2,12,2s-0.5,0.223877-0.5,0.5V5h-3V2.5C8.5,2.223877,8.276123,2,8,2S7.5,2.223877,7.5,2.5V5C6.119812,5.0012817,5.0012817,6.119812,5,7.5H2.5C2.223877,7.5,2,7.723877,2,8s0.223877,0.5,0.5,0.5H5v3H2.5C2.223877,11.5,2,11.723877,2,12s0.223877,0.5,0.5,0.5H5v3H2.5C2.223877,15.5,2,15.723877,2,16s0.223877,0.5,0.5,0.5H5c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5v2.5005493C7.5001831,21.7765503,7.723999,22.0001831,8,22h0.0006104C8.2765503,21.9998169,8.5001831,21.776001,8.5,21.5V19h3v2.5005493C11.5001831,21.7765503,11.723999,22.0001831,12,22h0.0006104c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5V19h3v2.5005493C15.5001831,21.7765503,15.723999,22.0001831,16,22h0.0006104c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5V19c1.380188-0.0012817,2.4987183-1.119812,2.5-2.5h2.5c0.276123,0,0.5-0.223877,0.5-0.5s-0.223877-0.5-0.5-0.5H19v-3H21.5z M18,16.5c-0.0009155,0.828064-0.671936,1.4990845-1.5,1.5h-9c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5v-9C6.0009155,6.671936,6.671936,6.0009155,7.5,6h9c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5V16.5z M14,8.5c-0.8284302,0-1.5,0.6715698-1.5,1.5s0.6715698,1.5,1.5,1.5c0.828064-0.0009155,1.4990845-0.671936,1.5-1.5C15.5,9.1715698,14.8284302,8.5,14,8.5z M14,10.5c-0.276123,0-0.5-0.223877-0.5-0.5s0.223877-0.5,0.5-0.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5C14.5,10.276123,14.276123,10.5,14,10.5z M14,12.5c-0.8284302,0-1.5,0.6715698-1.5,1.5s0.6715698,1.5,1.5,1.5c0.828064-0.0009155,1.4990845-0.671936,1.5-1.5C15.5,13.1715698,14.8284302,12.5,14,12.5z M14,14.5c-0.276123,0-0.5-0.223877-0.5-0.5s0.223877-0.5,0.5-0.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5C14.5,14.276123,14.276123,14.5,14,14.5z'
  }));
});