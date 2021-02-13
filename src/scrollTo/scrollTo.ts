import {getTop} from '..'

export function scrollTo (position: number | string): void {
  if (typeof position === 'string') {
    const element = document.querySelector(position)
    if (element) {
      element.scrollIntoView()
    } else {
      scrollTo(0)
    }
  } else if (position > -1) {
    const top = getTop()
    if (top !== position) {
      document.documentElement.scrollTop = document.body.scrollTop = position
    }
  }
}

export default scrollTo
