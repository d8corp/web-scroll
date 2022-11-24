'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../getTop/index.js');
require('../scrollTo/index.js');
var getTop = require('../getTop/getTop.js');
var scrollTo = require('../scrollTo/scrollTo.js');

let scrollTimer;
function scrollLoop(options, callback, top = getTop.getTop()) {
    const { attempts, timeout, position, timeInterval } = options;
    if (attempts && timeout) {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            const currentTop = getTop.getTop();
            if (currentTop === top) {
                if (--options.attempts > 0) {
                    scrollTo.scrollTo(position);
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

exports.scrollLoop = scrollLoop;
