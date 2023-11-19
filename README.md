# Qwik Unicons


4,500+ Pixel-perfect vector icons as Qwik Components. These icons are designed by [IconScout](https://iconscout.com).

## Getting Started
You can easily install qwik-unicons using npm.
```bash
npm install --save qwik-unicons
```
Or using `yarn`
```bash
yarn add qwik-unicons
```

## Usage
### Use individual icons
```js
import UilAdjust from 'qwik-unicons/icons/uil-adjust'

const App = () => {
  return <UilAdjust size="140" color="#61DAFB" />
};

export default App;
````

You can customize icons as below:
```html
<Unicons.UilAdjust size="140" color="#61DAFB" />
```

### Usage as full Package
```js
import * as Unicons from 'qwik-unicons';

const App = () => {
  return <Unicons.UilAdjust />
};

export default App;
````

### More ways
- [React-unicons](https://github.com/Iconscout/react-unicons)
- [React-native-unicons](https://github.com/Iconscout/react-native-unicons)
- [Vue-unicons](https://github.com/antonreshetov/vue-unicons) by [Anton Reshetov](https://github.com/antonreshetov)
- [Vector SVGs](https://iconscout.com/unicons)
- [Icon Font](https://github.com/Iconscout/unicons)

## Contributing
We will be happy to have community support for Unicons. Feel free to fork and create pull requests. We have given a small roadmap above so that you can help us build these features.

## License
Unicons are Open Source icons and licensed under [IconScout Simple License](https://iconscout.com/licenses#simple_license). You're free to use these icons in your personal and commercial project. We would love to see the attribution in your app's **about** screen, but it's not mandatory.
```html
Qwik Unicons by <a href="https://iconscout.com/">IconScout</a>
```