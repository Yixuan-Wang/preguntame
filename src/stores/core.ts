import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { getGist, syncGetDefaultGist } from '~/logic'

export interface Core {
  engines: Engine[]
}

const defaultGist: Core = syncGetDefaultGist()

export const useCoreStore = defineStore('core', {
  state: () => {
    const timestamp = useLocalStorage<number>('timestamp', -1)
    const engines = useLocalStorage<Engine[]>('engines', [])
    const isFallback = ref(false)

    return {
      timestamp,
      engines,
      isFallback,
    }
  },
  getters: {
    mapEngines: state => new Map<string, Engine>(state.engines.map(engine => [engine.shorthand, engine])),
  },
  actions: {
    updateGist() {
      const gist = getGist()
      const assignState = ({ engines }: Core) => {
        this.engines = engines
      }

      gist.then(assignState)
        .catch(async() => {
          assignState(defaultGist)
          this.isFallback = true
        })
    },
  },
})
