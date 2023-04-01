<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  to: RouteLocationRaw
}>()

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>

<template>
  <a
    class="appearance-none"
    v-if="isExternalLink && typeof to === 'string'"
    :href="to"
    target="_blank"
    v-bind="$attrs"
  >
    <slot />
  </a>
  <RouterLink v-else v-bind="$props" custom v-slot="{ href, navigate }">
    <a class="appearance-none" v-bind="$attrs" :href="href" @click="navigate">
      <slot />
    </a>
  </RouterLink>
</template>
