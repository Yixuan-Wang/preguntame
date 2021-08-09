import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { getGist } from '~/logic'

export const useCoreStore = defineStore('core', {
  state: () => {
    const timestamp = useLocalStorage<number>('timestamp', -1)
    const engines = useLocalStorage<Engine[]>('engines', [])
    return {
      timestamp,
      engines,
    }
  },
  getters: {
    mapEngines: state => new Map<string, Engine>(state.engines.map(engine => [engine.shorthand, engine])),
  },
  actions: {
    updateGist() {
      getGist().then(({ engines }) => {
        this.engines = engines
      })
    },
  },
  // other options...
})
