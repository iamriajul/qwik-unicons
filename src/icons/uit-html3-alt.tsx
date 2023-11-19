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
    d: 'M20.8691406,2.1621094C20.774292,2.0586548,20.6403809,1.9998169,20.5,2h-17C3.2243652,1.9994507,3.0004883,2.2224731,2.999939,2.4981079c-0.000061,0.0153198,0.0006104,0.0306396,0.0020142,0.0458984l1.5,17c0.0181274,0.2060547,0.161438,0.3796387,0.3603516,0.4365234l6.9902344,2C11.8973389,21.9932861,11.9436646,21.9998169,11.9902344,22c0.0462646-0.0001221,0.0922852-0.0067139,0.1367188-0.0195312l7.0097656-2c0.1991577-0.0567627,0.3427734-0.2302856,0.3613281-0.4365234l1.5-17C21.0106812,2.4042358,20.9638672,2.265625,20.8691406,2.1621094z M18.5322266,19.1132812l-6.5419922,1.8671875l-6.5224609-1.8662109L4.0458984,3h15.9082031L18.5322266,19.1132812z M7.960022,7.5h7.5341797l-0.2664795,3H10c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h5.138855l-0.3449097,3.8828125L12,16.0175781l-2.7940063-0.6347656L9.078064,13.9550781c-0.0314331-0.2715454-0.2702026-0.4707642-0.5429688-0.453125c-0.2750244,0.0249634-0.4777832,0.2680054-0.453125,0.5429688l0.1601562,1.7900391c0.0194702,0.2160034,0.1760864,0.3947144,0.3876343,0.4423828l3.2598267,0.7402344c0.0725708,0.0169067,0.1480713,0.0169067,0.2207031,0l3.2597656-0.7402344c0.211853-0.0478516,0.3685303-0.2270508,0.3876953-0.4433594l0.4263306-4.8028564C16.1848145,11.0202637,16.1903687,11.0110474,16.1903687,11l-0.0024414-0.012085l0.3500977-3.9440308c0.0247192-0.2744751-0.1777344-0.5170898-0.4522705-0.5418701C16.0705566,6.5006714,16.0552979,6.5,16.039978,6.5H7.960022c-0.2761841,0-0.5,0.223877-0.5,0.5S7.6838379,7.5,7.960022,7.5z'
  }));
});