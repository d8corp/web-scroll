import { getTop } from '../getTop'
import { scrollTo } from '../scrollTo'
import { ScrollCallback, ScrollOptions } from '../types'

let scrollTimer: any

export function scrollLoop (options: Required<ScrollOptions>, callback?: ScrollCallback, top = getTop()): void {
  const { attempts, timeout, position, timeInterval } = options

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
