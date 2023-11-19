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
    d: 'M15.25,5.2041016C14.1124878,5.2034302,12.9937134,5.4936523,12,6.0472412c-0.9937134-0.5535889-2.1124878-0.843811-3.25-0.8431396C4.9967041,5.2298584,1.9749756,8.293335,2.0007324,12.0466309C2.0262451,15.7635498,5.0330811,18.7703857,8.75,18.7958984c1.1375122,0.0006714,2.2562866-0.2895508,3.25-0.8431396c0.9937134,0.5535889,2.1124878,0.843811,3.25,0.8431396c3.7532959-0.0257568,6.7750244-3.0892944,6.7492676-6.8425293C21.9737549,8.2364502,18.9668579,5.2296143,15.25,5.2041016z M8.75,17.7958984c-3.2009888-0.0252075-5.7754517-2.640625-5.7501831-5.8416138C3.0247803,8.7889404,5.5846558,6.2290649,8.75,6.2041016c0.791687,0.000061,1.574646,0.1657715,2.2984619,0.4864502c-2.932312,2.3508301-3.4036865,6.633728-1.0528564,9.56604c0.3114014,0.3884277,0.6644287,0.7414551,1.0528564,1.0528564C10.324646,17.630127,9.541687,17.7958374,8.75,17.7958984z M12,16.7767334C10.4329224,15.6915283,9.4985352,13.9061279,9.5,12c-0.0014648-1.9061279,0.9329224-3.6915283,2.5-4.7767334c2.6381226,1.8299561,3.2932739,5.4520264,1.4633179,8.0901489C13.0669556,15.8847656,12.5713501,16.3804321,12,16.7767334z M15.25,17.7958984c-0.791687-0.000061-1.574646-0.1657715-2.2984619-0.4864502c2.932312-2.3508301,3.4036865-6.633728,1.0528564-9.56604c-0.3114014-0.3884277-0.6644287-0.7414551-1.0528564-1.0528564C13.675354,6.369873,14.458313,6.2041626,15.25,6.2041016c3.2009888,0.0252075,5.7754517,2.640564,5.7502441,5.8415527C20.9752808,15.2110596,18.4154053,17.7709351,15.25,17.7958984z'
  }));
});