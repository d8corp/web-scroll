'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../getTop/getTop.js');
var scrollTo_scrollTo = require('../scrollTo/scrollTo.js');
var scrollLoop_scrollLoop = require('../scrollLoop/scrollLoop.js');

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
        scrollLoop_scrollLoop.scrollLoop(position, callback);
        scrollTo_scrollTo.scrollTo(position.position);
    }
    else if (callback) {
        scrollLoop_scrollLoop.scrollLoop({ position: position, timeout: 30, attempts: 1, timeInterval: 100 }, callback);
        scrollTo_scrollTo.scrollTo(position);
    }
    else {
        scrollTo_scrollTo.scrollTo(position);
    }
}

exports.default = scroll;
exports.scroll = scroll;
