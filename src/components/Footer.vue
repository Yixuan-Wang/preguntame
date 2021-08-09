<script setup lang="ts">
import { mapWritableState } from 'pinia'
import { darkMode, toggleDarkMode, DarkMode, getGist } from '~/logic'
import { useUIStore, useCoreStore } from '~/stores'

const uiStore = mapWritableState(useUIStore, ['isPopupGistOpen', 'isPopupInfoOpen'])
const isPopupGistOpen = computed(uiStore.isPopupGistOpen)
const isPopupInfoOpen = computed(uiStore.isPopupInfoOpen)

const coreStore = useCoreStore()

</script>

<template>
  <nav class="my-0 lg:my-4 grid lg:text-lg">
    <span class="flex gap-4 justify-self-start">
      <button id="btn-popup-gist" class="icon-btn" :class="{ active: isPopupGistOpen }" @pointerdown.stop="isPopupGistOpen = !isPopupGistOpen">
        <mdi-briefcase />
      </button>
      <button class="icon-btn" @click="toggleDarkMode()">
        <mdi-brightness-auto v-if="darkMode === DarkMode.Auto " />
        <mdi-brightness-7 v-else-if="darkMode === DarkMode.Light " />
        <mdi-brightness-4 v-else />
      </button>
    </span>

    <span class="flex gap-4 justify-self-center">
      <button class="icon-btn" @click="coreStore.updateGist">
        <mdi-sync />
      </button>
    </span>

    <span class="flex gap-4 justify-self-end">
      <button id="btn-popup-info" class="icon-btn" :class="{ active: isPopupInfoOpen }" @pointerdown.stop="isPopupInfoOpen = !isPopupInfoOpen">
        <mdi-information />
        <span></span>
      </button>
      <a class="icon-btn" rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank" title="GitHub">
        <mdi-github />
      </a>
    </span>
  </nav>
</template>

<style>
nav {
  grid-template-columns: repeat(3, 1fr);
}
</style>
