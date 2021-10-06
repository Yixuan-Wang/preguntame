import type { useCoreStore } from '~/stores'

export function genUrlFromEngine(query: Query) {
  return (engine: Engine) => engine.pattern.replace(/{}/, query.query)
}

export function launch(query: Query, coreStore: ReturnType<typeof useCoreStore>) {
  (query.engines.length ? query.engines : coreStore.engines.slice(0, 1)).map(genUrlFromEngine(query)).forEach((url) => {
    window.open(url)
  })
}
