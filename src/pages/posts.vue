<script lang="ts" setup>
import conf from '@v-site'
const { posts } = conf

const route = useRoute()

const postItem = computed(() => {
  return posts.find((n) => n.path == route.path)
})
//
</script>

<template>
  <div>
    <!-- <div>{{ postItem }}</div> -->
    <div class="markdown-body">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style lang="less"></style>
