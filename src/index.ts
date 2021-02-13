export * from './getTop'
export * from './scrollTo'
export * from './scrollLoop'
export * from './scroll'
export {default} from './scroll'

export interface ScrollOptions {
  position: number | string
  attempts?: number
  timeout?: number
  timeInterval?: number
}

export type ScrollCallback = () => any | void
