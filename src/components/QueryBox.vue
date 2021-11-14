<script setup lang="ts">
// @ts-nocheck
const props = defineProps<{
  modelValue: string
  query: Query
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const isTyping = ref(false)
const handleInput = (event: Event) => {
  if (!isTyping.value) emit('update:modelValue', (event.target as HTMLInputElement).value)
}
const handleCompositionEnd = (event: Event) => {
  isTyping.value = false
  handleInput(event)
}
</script>

<template>
  <div
    class="h-12 flex gap-1 justify-between focus-within:border-primary border-b-2 text-left transition"
    :class="{ 'focus-within:border-secondary': !!query.engines.length }"
  >
    <span v-show="query.engines.length" class="flex gap-1 py-1 items-center">
      <span v-for="(engine, idx) in query.engines" :key="idx" class="py-1 px-0.5 bg-secondary text-black border-secondary border-2 rounded text-sm">
        {{ engine.name }}
      </span>
    </span>
    <input
      id="query-box"
      :value="modelValue"
      type="text"
      class="input flex-auto"
      autofocus
      autocomplete="off"
      @compositionstart="isTyping = true"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
    />
  </div>
</template>
