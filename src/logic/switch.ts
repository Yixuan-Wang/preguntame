import { isRef, Ref, ref } from 'vue-demi'

/**
 * A int ref with a switch
 *
 * @param min
 * @param max
 * @param [initialValue=0]
 */
// export function useSwitch(min: number, max: number, value: Ref<number>): (value?: number) => number
// export function useSwitch(min: number, max: number, initialValue?: number): [Ref<number>, (value?: number) => number]

export function useSwitch(min: number, max: number, initialValue: number | Ref<number> = 0) {
  if (isRef(initialValue)) {
    return (value?: number) => {
      const newValue = value ?? (initialValue.value - min + 1) % (max - min + 1) + min
      initialValue.value = newValue <= max && newValue >= min ? newValue : min
    }
  }
  else {
    const refSwitch = ref(initialValue)
    const Switch = (value?: number) => {
      const newValue = value ?? (refSwitch.value - min + 1) % (max - min + 1) + min
      refSwitch.value = newValue <= max && newValue >= min ? newValue : min
    }

    return [refSwitch, Switch] as const
  }
}
