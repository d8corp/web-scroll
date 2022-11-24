import '../getTop/index.es6.js';
import { getTop } from '../getTop/getTop.es6.js';

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
        const top = getTop();
        if (top !== position) {
            document.documentElement.scrollTop = document.body.scrollTop = position;
        }
    }
}

export { defaultScrollOptions, scrollTo };
