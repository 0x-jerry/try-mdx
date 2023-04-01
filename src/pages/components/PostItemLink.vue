<script lang="ts" setup>
import dayjs from 'dayjs'
import type { PostMatter } from '@v-site'

interface PostItemLinkProps {
  path: string
  data: PostMatter
}

const props = defineProps<PostItemLinkProps>()
</script>

<template>
  <div class="flex-(~ col) gap-2 md:flex-row">
    <div class="flex-(~ wrap) gap-2 items-center w-full">
      <VTag class="date">{{ dayjs(props.data.date).format('YYYY-MM-DD') }}</VTag>

      <VLink :to="path"> {{ data.title }}</VLink>

      <v-tag
        class="tag"
        v-for="tag in data.tags || []"
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
  </div>
</template>

<style lang="less" scoped>
.date {
  @apply text-xs text-gray-5 bg-gray-1 font-mono;

  padding: 2px 6px;
  border: none;
}

.tag {
  padding: 0px 4px;
  font-size: 12px;

  @apply font-mono text-gray-5;
}
</style>
