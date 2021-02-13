import '../getTop/getTop.es6.js';
import { scrollTo } from '../scrollTo/scrollTo.es6.js';
import { scrollLoop } from '../scrollLoop/scrollLoop.es6.js';

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
        scrollLoop(position, callback);
        scrollTo(position.position);
    }
    else if (callback) {
        scrollLoop({ position, timeout: 30, attempts: 1, timeInterval: 100 }, callback);
        scrollTo(position);
    }
    else {
        scrollTo(position);
    }
}

export default scroll;
export { scroll };
