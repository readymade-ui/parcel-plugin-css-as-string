# parcel-plugin-css-as-string

Parcel plugin that loads CSS into JavaScript and TypeScript files as a string. The string is useful for cases when you need to inject styling into components. The plugin is compatible with [Readymade](https://readymade-ui.github.io/readymade/) and other component libraries where you specify component level styling as a string.


## Installation

```
npm install -D parcel-plugin-css-as-string
yarn add parcel-plugin-css-as-string --dev
```

Note: If the console shows that the CSS module cannot be found after installation, delete the cache and dist folders and rebuild the project. 

## Usage

button.css

```css
:host {
  background: rgba(24, 24, 24, 1);
  cursor: pointer;
  color: white;
  font-weight: 700;
  padding: 12px 8px;
  border-radius: 4px;
}

```

button.ts

```js
import css from './button.css'

@Component({
    selector: 'my-button',
    style: style
})
```

## Use Cases

1. You want to inject styling into custom element Shadow DOM
2. You want to use any CSS preprocessor

## How Does It Work

This plugin acts as a passthrough for styling so you can leverage CSS strings in JavaScript. By default, Parcel would return an empty Object if you tried to import CSS into JS. This plugin serializes the CSS so it returns properly as a string.
