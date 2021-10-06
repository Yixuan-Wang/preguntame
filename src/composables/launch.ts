import type { useCoreStore } from '~/stores'

export function genUrlFromEngine(query: Query) {
  return (engine: Engine) => engine.pattern.replace(/{}/, query.query)
}

export function genLaunchFunc(coreStore: ReturnType<typeof useCoreStore>, options: {
  isReplace?: boolean
} = {}) {
  return (query: Query) => {
    const engines = query.engines.length ? query.engines : coreStore.engines.slice(0, 1)
    if (options?.isReplace) {
      if (engines.length)
        location.assign(genUrlFromEngine(query)(engines[0]))
    }
    else {
      engines.map(genUrlFromEngine(query)).forEach((url) => {
        window.open(url)
      })
    }
  }
}
