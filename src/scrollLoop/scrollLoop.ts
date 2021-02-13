import {getTop, scrollTo, ScrollOptions, ScrollCallback} from '..'

let scrollTimer

export function scrollLoop (options: Required<ScrollOptions>, callback?: ScrollCallback, top = getTop()): void {
  const {attempts, timeout, position, timeInterval} = options

  if (attempts && timeout) {
    clearTimeout(scrollTimer)
    scrollTimer = setTimeout(() => {
      const currentTop = getTop()

      if (currentTop === top) {
        if (--options.attempts > 0) {
          scrollTo(position)
          scrollLoop(options, callback, currentTop)
        } else if (callback) {
          callback()
        }
      } else if (--options.timeout > 0) {
        scrollLoop(options, callback, currentTop)
      }
    }, timeInterval)
  }
}

export default scrollLoop
