<script lang="ts" setup>
import site from '@v-site'
import type { PostItem } from '@v-site'
import PostItemLink from './components/PostItemLink.vue'

const route = useRoute()

const tags = computed(() => {
  const _tags: Record<string, PostItem[]> = {}

  site.posts.forEach((item) => {
    item.data.tags?.forEach((tagName) => {
      _tags[tagName] ||= []

      const hit = _tags[tagName].find((n) => n.path === item.path)
      if (!hit) {
        _tags[tagName].push(item)
      }
    })
  })

  return _tags
})

const selectedTag = computed(() => route.query.tag as string)

const posts = computed(() => {
  return tags.value[selectedTag.value] || []
})
</script>

<template>
  <div>
    <v-page-title :title="$t('title.tags')"></v-page-title>
    <div class="flex-(~ wrap) gap-2 justify-center">
      <v-tag
        v-for="tag in Object.keys(tags)"
        @click="$router.push({ query: { tag } })"
        :name="tag"
        clickable
      >
      </v-tag>
    </div>
    <template v-if="selectedTag">
      <div class="text-center my-40px">
        <v-tag class="text-2xl font-bold border-none!" :name="selectedTag">
          {{ selectedTag }} ({{ posts.length }})
        </v-tag>
      </div>
      <div class="flex-(~ col) gap-2">
        <PostItemLink v-for="item in posts" v-bind="item"></PostItemLink>
      </div>
    </template>
  </div>
</template>

<style lang="less"></style>
