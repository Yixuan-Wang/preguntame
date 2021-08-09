<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { mapWritableState } from 'pinia'
import { useUIStore } from '~/stores'
import { giteeGistID, giteeToken } from '~/logic'

const store = mapWritableState(useUIStore, ['isPopupGistOpen'])
const isPopupGistOpen = computed(store.isPopupGistOpen)

const popupGist = ref(null)
onClickOutside(popupGist, (event) => {
  // if (event.composedPath().includes(btnPopupGist)) return
  isPopupGistOpen.value = false
})
</script>

<template>
  <div v-if="isPopupGistOpen" id="popup-gist" ref="popupGist" class="absolute left-1 bottom-1 md:left-0 p-4 bg-white dark:bg-gray-800 shadow rounded text-left max-width-sm md:max-width-md">
    <!-- <h3 class="font-bold text-lg mb-2">数据源</h3> -->
    <div id="popup-gist-form" class="grid gap-1 text-sm">
      <span>令牌</span>
      <input v-model="giteeToken" class="min-w-0" />
      <span>Gist ID</span>
      <input v-model="giteeGistID" class="min-w-0" />
    </div>
  </div>
</template>

<style>
#popup-gist-form {
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr auto;
}

#popup-gist-form :nth-child(odd) {
  justify-self: end;
}

#popup-gist-form :nth-child(even) {
  justify-self: start;
}
</style>
