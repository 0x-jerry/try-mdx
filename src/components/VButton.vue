<script lang="ts" setup></script>

<template>
  <button class="v-btn">
    <slot></slot>
  </button>
</template>

<style lang="less" scoped>
.v-btn {
  @apply px-2 py-2 
        border(gray-100 1) bg-gray-100 
        hover:bg-gray-200 
        inline-flex items-center justify-center 
        cursor-pointer appearance-none border-none;
}
</style>
