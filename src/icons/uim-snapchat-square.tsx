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
    d: 'M19.174 15.652a4.522 4.522 0 0 1-3.079-2.582l-.004-.009a.784.784 0 0 1-.074-.657c.14-.332.607-.48.916-.578.077-.024.15-.048.207-.07.559-.22.672-.45.67-.602a.485.485 0 0 0-.368-.398l-.004-.002a.694.694 0 0 0-.26-.05.552.552 0 0 0-.23.046 1.86 1.86 0 0 1-.7.195.602.602 0 0 1-.387-.13l.023-.389.003-.047c.141-.987.081-1.992-.176-2.955a3.843 3.843 0 0 0-3.568-2.298l-.295.002a3.837 3.837 0 0 0-3.562 2.298 7.388 7.388 0 0 0-.177 2.951l.027.438a.621.621 0 0 1-.428.13 1.796 1.796 0 0 1-.742-.195.42.42 0 0 0-.18-.036.61.61 0 0 0-.593.39c-.06.315.39.544.664.652.057.023.13.046.207.07.309.098.775.246.916.578.073.22.046.46-.075.658l-.004.008c-.202.44-.465.85-.782 1.217a3.818 3.818 0 0 1-2.296 1.365.176.176 0 0 0-.147.183c.002.033.01.065.023.095.129.301.775.55 1.869.718.102.016.145.183.205.456.024.11.048.223.083.34.023.107.124.18.234.167a1.82 1.82 0 0 0 .31-.044c.27-.06.545-.09.821-.093.198 0 .396.017.592.05.413.105.797.3 1.124.574a3.253 3.253 0 0 0 1.97.776c.024 0 .048 0 .072-.003.03.002.07.003.112.003a3.257 3.257 0 0 0 1.97-.776c.327-.273.71-.47 1.123-.574.196-.033.393-.05.592-.05.275.001.55.03.82.087.102.022.207.035.311.04h.017a.204.204 0 0 0 .217-.163c.034-.115.059-.225.083-.337.06-.272.103-.438.205-.454 1.094-.169 1.74-.417 1.868-.716a.28.28 0 0 0 .023-.096.176.176 0 0 0-.146-.183z'
  }));
});