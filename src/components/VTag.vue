<script lang="ts" setup>
import type { Component } from 'vue'
import TypeScript from '~icons/vscode-icons/file-type-typescript'

const props = defineProps<{
  name?: string
}>()

const map: Record<string, Component> = {
  typescript: TypeScript,
}

const icon = computed(() => props.name && map[props.name.toLocaleLowerCase()])
</script>

<template>
  <span class="v-tag">
    <component v-if="name && icon" :is="icon"></component>
    <slot v-else>
      {{ name }}
    </slot>
  </span>
</template>

<style lang="less">
.v-tag {
  padding: 2px 6px;
  border: 1px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  font-size: small;

  display: inline-flex;
}
</style>
