<script lang="ts" setup>
import conf from '@v-site'
import PostItemLink from './components/PostItemLink.vue'
</script>

<template>
  <v-page-title :title="$t('title.index', { name: $t('name') })"></v-page-title>
  <div class="flex-(~ col) gap-2">
    <PostItemLink v-for="item in conf.posts" v-bind="item"></PostItemLink>
  </div>
</template>
