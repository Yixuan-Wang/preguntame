<script setup lang="ts">
import { toQuery } from '~/composables/parse'
import { genUrlFromEngine } from '~/composables/launch'
import { useCoreStore } from '~/stores'

const input = ref('')
const query = computed(() => shallowReactive(toQuery(input.value)))

const coreStore = useCoreStore()

const go = () => {
  (query.value.engines.length ? query.value.engines : coreStore.engines.slice(0, 1)).map(genUrlFromEngine(query.value)).forEach((url) => {
    const link = document.createElement('a')
    link.target = '_blank'
    link.rel = 'noopener'
    link.referrerPolicy = 'no-referrer'
    link.href = url
    link.click()
  })
  // if (name.value)
  //   router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <!-- <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Vitesse Lite
      </a>
    </p>
    <p>
      <em class="text-sm opacity-75">Opinionated Vite Starter Template</em>
    </p>
    -->
    <div class="mt-[6.18%] grid grid-cols-[1fr,auto] gap-2">
      <QueryBox
        v-model="input"
        :query="query"
        @keypress.enter.exact.prevent="go"
      />
      <button
        class="icon-btn"
        :disabled="!input"
        @click="go"
      >
        <mdi-search />
      </button>
    </div>
  </div>
</template>
