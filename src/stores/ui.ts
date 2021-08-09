import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state() {
    return {
      isPopupGistOpen: false,
      isPopupInfoOpen: false,
    }
  },
  // other options...
})
