'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../scrollLoop/index.js');
require('../scrollTo/index.js');
var scrollLoop = require('../scrollLoop/scrollLoop.js');
var scrollTo = require('../scrollTo/scrollTo.js');

function scroll(position, callback) {
    if (typeof position === 'object') {
        if (!('attempts' in position)) {
            position.attempts = 1;
        }
        if (!('timeout' in position)) {
            position.timeout = 30;
        }
        if (!('timeInterval' in position)) {
            position.timeInterval = 100;
        }
        scrollLoop.scrollLoop(position, callback);
        scrollTo.scrollTo(position.position);
    }
    else if (callback) {
        scrollLoop.scrollLoop({ position, timeout: 30, attempts: 1, timeInterval: 100 }, callback);
        scrollTo.scrollTo(position);
    }
    else {
        scrollTo.scrollTo(position);
    }
}

exports["default"] = scroll;
exports.scroll = scroll;
