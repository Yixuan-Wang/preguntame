declare global {
  declare const __APP_VERSION__: string
  declare interface Engine {
    name: string!
    pattern: string
    shorthand: string
  }

  declare interface ConfigEngine {
    [key: string]: Engine
  }

  declare interface Query {
    engines: Engine[]
    query: string
  }
}

export {}
