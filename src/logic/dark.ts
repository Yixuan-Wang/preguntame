import { watch } from 'vue-demi'
import { useStorage, useMediaQuery } from '@vueuse/core'
import { tryOnMounted } from '@vueuse/shared'
import { useSwitch } from './switch'

export enum DarkMode {
  Auto = -1,
  Light,
  Dark
}

// export const isDark = useDark()
// export const toggleDark = useToggle(isDark)

/**
 * Reactive dark mode with auto data persistence.
 *
 */
export function useDarkMode() {
  // const {
  //   selector = 'html',
  //   attribute = 'class',
  //   valueDark = 'dark',
  //   valueLight = '',
  //   window = defaultWindow,
  //   storage = defaultWindow?.localStorage,
  //   storageKey = 'darkmode',
  //   listenToStorageChanges = true,
  // } = options

  const preferredDark = useMediaQuery('(prefers-color-scheme: dark)')
  const darkMode = useStorage<number>('darkmode', DarkMode.Auto, window.localStorage, { window, listenToStorageChanges: true })

  const onChanged = (v: number) => {
    const el = window?.document.querySelector('html')
    el?.classList.toggle('dark', v === DarkMode.Dark || (v === DarkMode.Auto && preferredDark.value))
  }

  watch(darkMode, onChanged, { flush: 'post' })
  watch(preferredDark, () => darkMode.value === DarkMode.Auto && onChanged(darkMode.value))

  tryOnMounted(() => onChanged(darkMode.value))

  return darkMode
}

export const darkMode = useDarkMode()
export const toggleDarkMode = useSwitch(-1, 1, darkMode)
