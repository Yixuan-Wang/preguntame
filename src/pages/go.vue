<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCoreStore } from '~/stores'
import { toQuery } from '~/composables/parse'
import { genLaunchFunc } from '~/composables/launch'

const route = useRoute()
genLaunchFunc(useCoreStore(), {
  isReplace: true,
})(toQuery(route.query?.q as string ?? ''))
</script>

<template>
  <div class="m-auto h-full w-full flex justify-center align-middle items-center">
    <div>
      <mdi-connection class="w-16 h-16" />
      <h1 class="font-bold text-2xl pt-2">
        加载中……
      </h1>
    </div>
  </div>
</template>
