'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getTop_getTop = require('../getTop/getTop.js');
var scrollTo_scrollTo = require('../scrollTo/scrollTo.js');

var scrollTimer;
function scrollLoop(options, callback, top) {
    if (top === void 0) { top = getTop_getTop.getTop(); }
    var attempts = options.attempts, timeout = options.timeout, position = options.position, timeInterval = options.timeInterval;
    if (attempts && timeout) {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function () {
            var currentTop = getTop_getTop.getTop();
            if (currentTop === top) {
                if (--options.attempts > 0) {
                    scrollTo_scrollTo.scrollTo(position);
                    scrollLoop(options, callback, currentTop);
                }
                else if (callback) {
                    callback();
                }
            }
            else if (--options.timeout > 0) {
                scrollLoop(options, callback, currentTop);
            }
        }, timeInterval);
    }
}

exports.default = scrollLoop;
exports.scrollLoop = scrollLoop;
