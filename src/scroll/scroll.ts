import {scrollTo, scrollLoop, ScrollOptions, ScrollCallback} from '..'

export function scroll (position: number | string | ScrollOptions, callback?: ScrollCallback): void {
  if (typeof position === 'object') {
    if (!('attempts' in position)) {
      position.attempts = 1
    }
    if (!('timeout' in position)) {
      position.timeout = 30
    }
    if (!('timeInterval' in position)) {
      position.timeInterval = 100
    }
    scrollLoop(position as any, callback)
    scrollTo(position.position)
  } else if (callback) {
    scrollLoop({position, timeout: 30, attempts: 1, timeInterval: 100}, callback)
    scrollTo(position)
  } else {
    scrollTo(position)
  }
}

export default scroll
