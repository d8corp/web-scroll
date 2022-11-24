export function getTop (): number {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
}
