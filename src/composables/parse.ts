import { uniq as _uniq } from 'lodash'
import type { useCoreStore } from '~/stores'

let coreStore: ReturnType<typeof useCoreStore>

interface QueryExpression {
  kind: 'str' | 'escaped' | 'whitespace' | 'engine'
  raw: string
  token: string
  head: string
  arg: string[]
}

function toQueryExpression(raw: string): QueryExpression {
  const token = raw.toLocaleLowerCase().normalize('NFKD')

  if (raw.match(/\s/)) {
    return {
      raw,
      token,
      kind: 'whitespace',
      head: raw,
      arg: [],
    }
  }
  else {
    switch (token[0]) {
      case '@':
        return {
          raw,
          token,
          kind: 'engine',
          head: token.slice(1),
          arg: [],
        }
      case '\\':
        if (token[1].match(/@/)) {
          return {
            raw,
            token,
            kind: 'escaped',
            head: raw.slice(1),
            arg: [],
          }
        }
        // fallthrough
      default:
        return {
          raw,
          token,
          kind: 'str',
          head: raw,
          arg: [],
        }
    }
  }
}

function composeQuery(prev: Query, exp: QueryExpression, idx: number, arr: QueryExpression[]): Query {
  if (exp.kind === 'engine') {
    if (coreStore.mapEngines.has(exp.head))
      prev.engines.push(coreStore.mapEngines.get(exp.head)!)
  }
  else {
    prev.query += exp.head
  }

  if (idx === arr.length - 1) {
    prev.query = prev.query.trim()
    prev.engines = _uniq(prev.engines)
  }
  return prev
}

export function initStore(init: typeof useCoreStore) {
  coreStore = init()
  coreStore.updateGist()
}

export function toQuery(input: string): Query {
  return input
    .split(/(\s)/)
    .map(toQueryExpression)
    .reduce(composeQuery, {
      engines: [],
      query: '',
    })
}
