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
    d: 'M18,9h-1.5C16.223877,9,16,9.223877,16,9.5s0.223877,0.5,0.5,0.5H18c1.1040039,0.0014038,1.9985962,0.8959961,2,2v7c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H6c-1.1040039-0.0014038-1.9985962-0.8959961-2-2v-7c0.0014038-1.1040039,0.8959961-1.9985962,2-2h2.5C8.776123,10,9,9.776123,9,9.5S8.776123,9,8.5,9H6c-1.6561279,0.0018311-2.9981689,1.3438721-3,3v7c0.0018311,1.6561279,1.3438721,2.9981689,3,3h12c1.6561279-0.0018311,2.9981689-1.3438721,3-3v-7C20.9981689,10.3438721,19.6561279,9.0018311,18,9z M8.8623047,6.3447266L11.5,3.7069702v13.7935791C11.5001831,17.7765503,11.723999,18.0001831,12,18h0.0006104c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5V3.7069702l2.6376953,2.6377563c0.0936279,0.0939331,0.2208862,0.1466675,0.3535156,0.1464844c0.1325684,0,0.2597046-0.0526733,0.3534546-0.1464233c0.1952515-0.1951904,0.1953125-0.5117798,0.000061-0.7070923l-3.4909058-3.4909058c-0.0462036-0.0462646-0.1015625-0.0828247-0.1629028-0.1082153c-0.0580444-0.0239258-0.1194458-0.0354004-0.1812134-0.0366211C12.0062866,2.0018921,12.003418,2,12,2c-0.0023804,0-0.0043945,0.0012817-0.0067749,0.0013428C11.930481,2.0021973,11.8678589,2.0141602,11.80896,2.0385742c-0.0612793,0.0253296-0.1164551,0.0618896-0.1625977,0.1080322L8.1552734,5.6377563C8.1528931,5.6400757,8.1505127,5.6424561,8.1481323,5.6448975C7.954895,5.8421021,7.9580688,6.1586304,8.1552734,6.3518677S8.6690674,6.5419312,8.8623047,6.3447266z'
  }));
});