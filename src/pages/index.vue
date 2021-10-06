<script setup lang="ts">
import { useRoute } from 'vue-router'
import { toQuery } from '~/composables/parse'
import { genLaunchFunc } from '~/composables/launch'
import { useCoreStore } from '~/stores'

const route = useRoute()

const input = ref(route.query?.q as string ?? '')
const query = computed(() => shallowReactive(toQuery(input.value)))

const coreStore = useCoreStore()
const launch = genLaunchFunc(coreStore)
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
        @keypress.enter.exact.prevent="launch(query)"
      />
      <button
        class="icon-btn"
        :disabled="!input"
        @click="launch(query)"
      >
        <mdi-search />
      </button>
    </div>
  </div>
</template>
