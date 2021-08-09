<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { mapWritableState } from 'pinia'
import { useUIStore } from '~/stores'

const store = mapWritableState(useUIStore, ['isPopupInfoOpen'])
const isPopupInfoOpen = computed(store.isPopupInfoOpen)

const popupInfo = ref(null)
onClickOutside(popupInfo, (event) => {
  // if (event.composedPath().includes(btnPopupInfo)) return
  isPopupInfoOpen.value = false
})

const appVersion = __APP_VERSION__

</script>

<template>
  <div v-if="isPopupInfoOpen" id="popup-info" ref="popupInfo" class="absolute right-1 bottom-1 md:right-0 p-4 bg-white dark:bg-gray-800 shadow rounded text-left max-width-sm md:max-width-md">
    <div class="text-sm">
      <span>版本 {{ appVersion }}</span>
    </div>
  </div>
</template>
