<script lang="ts" setup>
defineProps<{
  title: string
  showBack?: boolean
}>()
</script>

<template>
  <div class="flex items-end gap-1">
    <VButton
      v-if="showBack"
      class="w-26px h-26px p-0! mr-1 text-gray-5 rounded-sm self-center"
      @click="$router.back"
    >
      <i-material-symbols:arrow-back-rounded></i-material-symbols:arrow-back-rounded>
    </VButton>
    <h1 class="text-xl lg:text-2xl m-0 mr-2">{{ title }}</h1>
    <slot></slot>
  </div>
  <hr class="mt-2 mb-4" />
</template>

<style lang="less"></style>
