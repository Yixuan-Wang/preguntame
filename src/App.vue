<script setup lang="ts">
import { useHead } from '@vueuse/head'
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Pregúntame',
})
</script>

<template>
  <div id="root" class="grid p-4 text-center text-gray-700 dark:text-gray-200">
    <main id="main" class="relative mt-3">
      <router-view />
      <PopupGist />
      <PopupInfo />
    </main>
    <Footer />
  </div>
</template>

<style>
#root {
  justify-content: stretch;
  grid-auto-rows: 1fr auto;
  /* align-items: center; */
}
</style>
