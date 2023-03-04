<script lang="ts" setup>
const props = defineProps<{
  modelValue: number[]
}>()

defineEmits<{
  (type: 'update:modelValue', value: number[]): void
}>()

const update = (idx: number, val: number) => {
  const value = [...props.modelValue]

  value[idx] = val

  return value
}
</script>

<template>
  <div>Biz Counter</div>
  <Counter
    v-for="(o, idx) in modelValue"
    :key="idx"
    :model-value="o"
    @update:model-value="$emit('update:modelValue', update(idx, $event))"
  />
</template>
