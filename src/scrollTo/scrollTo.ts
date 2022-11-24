import { getTop } from '../getTop'

export const defaultScrollOptions: ScrollIntoViewOptions = { block: 'center', behavior: 'smooth' }

export function scrollTo (position: number | string, options: ScrollIntoViewOptions = defaultScrollOptions): void {
  if (typeof position === 'string') {
    const element = document.querySelector(position)
    if (element) {
      element.scrollIntoView(options)
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
