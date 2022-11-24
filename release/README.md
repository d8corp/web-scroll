# web-scroll
[![NPM](https://img.shields.io/npm/v/web-scroll.svg)](https://github.com/d8corp/web-scroll/blob/master/CHANGELOG.md)
[![downloads](https://img.shields.io/npm/dm/web-scroll.svg)](https://www.npmjs.com/package/web-scroll)
[![license](https://img.shields.io/npm/l/web-scroll)](https://github.com/d8corp/web-scroll/blob/master/LICENSE)

Browser History API with [watch-state](https://www.npmjs.com/package/watch-state).
### Installation
npm
```bash
npm i web-scroll
```
yarn
```bash
yarn add web-scroll
```
### Using
Simple scrolling
```typescript
import scroll from 'web-scroll'

scroll(0) // move to the top of the page

scroll('#root') // move to the element
scroll('.root') // move to the element
```
Callback for the scroll
```typescript
scroll(0, () => alert('done'))
scroll('#root', () => alert('done'))
```
With options
```typescript
scroll({
  position: 1, // scroll position of element's css selector
  timeInterval: 100, // the interval of scroll position checking for callback
  timeout: 30, // maximum count of position checking
  attempts: 3, // if the interface is freezing or smooth scrolling was interrupted, makes attempts to scroll it.
}, () => alert('done'))
```
#### Smooth scroll
Add this CSS style to have the smooth scroll on the page.
```css
html {
  scroll-behavior: smooth;
}
```
## Issues
If you find a bug, please file an issue on [GitHub](https://github.com/d8corp/web-scroll/issues)  
[![issues](https://img.shields.io/github/issues-raw/d8corp/web-scroll)](https://github.com/d8corp/web-scroll/issues)  
> ---
[![stars](https://img.shields.io/github/stars/d8corp/web-scroll?style=social)](https://github.com/d8corp/web-scroll/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/web-scroll?style=social)](https://github.com/d8corp/web-scroll/watchers)

