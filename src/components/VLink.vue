<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  to: RouteLocationRaw
}>()

function isExternalLink(to: RouteLocationRaw): to is string {
  return typeof to === 'string' && to.startsWith('http')
}
</script>

<template>
  <a v-if="isExternalLink(to)" :href="to" target="_blank" v-bind="$attrs">
    <slot />
  </a>
  <RouterLink v-else v-bind="$props" custom v-slot="{ href, navigate }">
    <a v-bind="$attrs" :href="href" @click="navigate">
      <slot />
    </a>
  </RouterLink>
</template>
