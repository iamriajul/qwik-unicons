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
    d: 'M16.44 15.993c-.414.555-.978.98-1.625 1.225a6.34 6.34 0 0 1-2.52.447 6.217 6.217 0 0 1-2.898-.612 3.733 3.733 0 0 1-1.32-1.178 2.574 2.574 0 0 1-.494-1.413.88.88 0 0 1 .307-.684 1.09 1.09 0 0 1 .776-.282.944.944 0 0 1 .637.212c.197.184.35.409.447.659.121.314.288.608.495.873.19.248.441.443.73.564.395.167.82.247 1.249.236a2.922 2.922 0 0 0 1.72-.447c.402-.236.652-.665.66-1.131a1.135 1.135 0 0 0-.354-.871 2.185 2.185 0 0 0-.92-.52c-.376-.117-.895-.235-1.53-.376a13.99 13.99 0 0 1-2.144-.636 3.348 3.348 0 0 1-1.366-1.013 2.474 2.474 0 0 1-.495-1.578c0-.579.19-1.142.542-1.602.399-.497.93-.873 1.53-1.084a6.652 6.652 0 0 1 2.38-.376 6.403 6.403 0 0 1 1.885.258c.476.138.923.362 1.318.66.316.235.58.532.778.872.151.265.232.565.236.87 0 .269-.11.525-.307.708a.991.991 0 0 1-.753.306.973.973 0 0 1-.636-.189 2.382 2.382 0 0 1-.471-.611 2.937 2.937 0 0 0-.778-.967 2.376 2.376 0 0 0-1.46-.353 2.703 2.703 0 0 0-1.508.377 1.076 1.076 0 0 0-.565.896.958.958 0 0 0 .188.565c.146.175.332.312.542.4.215.117.445.204.683.26.236.07.613.164 1.154.282.66.142 1.273.306 1.815.471.49.145.958.36 1.389.636.367.24.673.563.895.942.227.428.34.906.33 1.39a2.89 2.89 0 0 1-.542 1.814z'
  }));
});