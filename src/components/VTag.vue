<script lang="ts" setup>
defineProps<{
  name?: string
  clickable?: boolean
}>()
</script>

<template>
  <span class="v-tag" :class="{ clickable }">
    <v-tag-icon class="mr-2 icon" :name="name"></v-tag-icon>
    <slot>
      {{ name }}
    </slot>
  </span>
</template>

<style lang="less" scoped>
.v-tag {
  padding: 2px 6px;
  border: 1px solid #dedede;
  border-radius: 4px;

  display: inline-flex;
  align-items: center;

  @apply transition;

  .icon {
    font-size: 0.75em;
  }

  &.clickable {
    cursor: pointer;

    &:hover {
      @apply border-blue bg-blue-1;
    }
  }
}
</style>
