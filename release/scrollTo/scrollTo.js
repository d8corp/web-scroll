'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../getTop/index.js');
var getTop = require('../getTop/getTop.js');

const defaultScrollOptions = { block: 'center', behavior: 'smooth' };
function scrollTo(position, options = defaultScrollOptions) {
    if (typeof position === 'string') {
        const element = document.querySelector(position);
        if (element) {
            element.scrollIntoView(options);
        }
        else {
            scrollTo(0);
        }
    }
    else if (position > -1) {
        const top = getTop.getTop();
        if (top !== position) {
            document.documentElement.scrollTop = document.body.scrollTop = position;
        }
    }
}

exports.defaultScrollOptions = defaultScrollOptions;
exports.scrollTo = scrollTo;
