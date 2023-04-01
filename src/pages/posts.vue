<script lang="ts" setup>
import conf from '@v-site'
import dayjs from 'dayjs'
const { posts } = conf

const route = useRoute()

const post = computed(() => {
  return posts.find((n) => n.path == route.path)?.data
})
</script>

<template>
  <div>
    <template v-if="post">
      <v-page-title :title="post.title" show-back> </v-page-title>
      <div class="relative -top-10px flex gap-1 mb-3">
        <v-tag class="tag">{{ dayjs(post.date).format('YYYY-MM-DD HH:mm') }}</v-tag>
        <v-tag
          class="tag"
          v-for="tag in post.tags || []"
          :name="tag"
          clickable
          @click="
            $router.push({
              path: '/tags',
              query: { tag },
            })
          "
        />
      </div>
    </template>
    <RouterView></RouterView>
  </div>
</template>

<style lang="less" scoped>
.tag {
  padding: 0px 4px;
  font-size: 12px;

  @apply font-mono text-gray-5;
}
</style>
