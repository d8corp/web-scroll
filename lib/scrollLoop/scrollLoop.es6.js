import { getTop } from '../getTop/getTop.es6.js';
import { scrollTo } from '../scrollTo/scrollTo.es6.js';

let scrollTimer;
function scrollLoop(options, callback, top = getTop()) {
    const { attempts, timeout, position, timeInterval } = options;
    if (attempts && timeout) {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            const currentTop = getTop();
            if (currentTop === top) {
                if (--options.attempts > 0) {
                    scrollTo(position);
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

export default scrollLoop;
export { scrollLoop };
