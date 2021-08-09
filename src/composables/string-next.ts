/* eslint-disable no-extend-native */
declare global {
  interface String {
    next(func: (str: string) => string): string
  }
}

String.prototype.next = function(func: (str: string) => string) {
  return func(String(this))
}

export {}
