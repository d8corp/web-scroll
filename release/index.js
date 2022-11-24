'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./getTop/index.js');
require('./scrollTo/index.js');
require('./scrollLoop/index.js');
require('./scroll/index.js');
require('./types.js');
var scroll = require('./scroll/scroll.js');
var getTop = require('./getTop/getTop.js');
var scrollTo = require('./scrollTo/scrollTo.js');
var scrollLoop = require('./scrollLoop/scrollLoop.js');



exports["default"] = scroll.scroll;
exports.scroll = scroll.scroll;
exports.getTop = getTop.getTop;
exports.defaultScrollOptions = scrollTo.defaultScrollOptions;
exports.scrollTo = scrollTo.scrollTo;
exports.scrollLoop = scrollLoop.scrollLoop;
