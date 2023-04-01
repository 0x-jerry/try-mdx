<script lang="ts" setup>
defineProps<{
  name?: string
}>()
</script>

<template>
  <span class="v-tag">
    <v-tag-icon class="mr-2 icon" :name="name"></v-tag-icon>
    <slot>
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

  display: inline-flex;
  align-items: center;

  .icon {
    font-size: 0.75em;
  }
}
</style>
