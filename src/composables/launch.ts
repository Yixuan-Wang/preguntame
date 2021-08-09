export function genUrlFromEngine(query: Query) {
  return (engine: Engine) => engine.pattern.replace(/{}/, query.query)
}
