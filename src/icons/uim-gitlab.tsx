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
    d: 'm21.94 12.865-1.066-3.28.001.005v-.005L18.76 3.076a.833.833 0 0 0-.799-.57.822.822 0 0 0-.788.575l-2.007 6.178H8.834L6.824 3.08a.822.822 0 0 0-.788-.575H6.03a.839.839 0 0 0-.796.575L3.127 9.584l-.002.006.001-.005-1.068 3.28a1.195 1.195 0 0 0 .434 1.34l9.229 6.705.004.003.012.008-.011-.008.002.001.001.001a.475.475 0 0 0 .045.028l.006.004.004.002.003.001h.002l.006.003.024.01.023.01h.001l.004.002.005.002h.002l.007.002h.002c.011.004.023.006.034.009l.013.003h.002l.005.002.007.001h.007a.465.465 0 0 0 .066.006h.001a.467.467 0 0 0 .067-.005h.007l.007-.002.004-.001h.002l.014-.004.034-.008h.002l.007-.003h.002l.005-.002.003-.001h.001l.025-.011.023-.01.005-.002h.002l.003-.002.004-.002.007-.004a.478.478 0 0 0 .044-.027l.004-.003.005-.003 9.23-6.706a1.195 1.195 0 0 0 .434-1.339Zm-3.973-9.18 1.81 5.574h-3.62Zm1.493 6.516-.738.947-5.448 6.98 2.577-7.927Zm-7.91 10.474.001.004Zm-.827-2.546L4.54 10.2h3.61ZM6.03 3.686l1.813 5.573h-3.62Zm-2.984 9.756a.255.255 0 0 1-.092-.285l.794-2.438 5.822 7.464Zm8.659 7.456-.006-.005-.011-.01-.02-.018.002.001.002.002a.478.478 0 0 0 .042.037l.003.002Zm.293-1.894-1.514-4.665-1.343-4.138h5.719Zm.31 1.88-.01.008-.002.001-.005.005-.012.009.002-.002a.46.46 0 0 0 .043-.036l.001-.002.002-.002Zm8.643-7.442-6.523 4.74 5.824-7.463.791 2.437a.255.255 0 0 1-.092.286Z'
  }));
});