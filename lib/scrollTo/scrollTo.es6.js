import { getTop } from '../getTop/getTop.es6.js';

function scrollTo(position) {
    if (typeof position === 'string') {
        const element = document.querySelector(position);
        if (element) {
            element.scrollIntoView();
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

export default scrollTo;
export { scrollTo };
