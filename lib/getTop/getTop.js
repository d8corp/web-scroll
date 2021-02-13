'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function getTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

exports.default = getTop;
exports.getTop = getTop;
