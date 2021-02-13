'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getTop_getTop = require('../getTop/getTop.js');

function scrollTo(position) {
    if (typeof position === 'string') {
        var element = document.querySelector(position);
        if (element) {
            element.scrollIntoView();
        }
        else {
            scrollTo(0);
        }
    }
    else if (position > -1) {
        var top_1 = getTop_getTop.getTop();
        if (top_1 !== position) {
            document.documentElement.scrollTop = document.body.scrollTop = position;
        }
    }
}

exports.default = scrollTo;
exports.scrollTo = scrollTo;
