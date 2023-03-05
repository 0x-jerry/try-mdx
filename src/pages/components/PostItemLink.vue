<script lang="ts" setup>
import { PostMatter } from '@v-site'

interface PostItemLinkProps {
  path: string
  data: PostMatter
}

const props = defineProps<PostItemLinkProps>()
</script>

<template>
  <div class="flex(& col) gap-2 md:flex-row">
    <div class="flex(& wrap) gap-2 items-center">
      <!-- <Tag>{dayjs(props.data.date).format('YYYY-MM-DD')}</Tag> -->

      <VLink :to="path"> {{ data.title }}</VLink>
    </div>
    <!-- {props.data.tags?.length && (
        <div class='flex(& wrap) gap-2 items-center border(b solid gray-100) pb-4 mb-2 md:(p-0 m-0 border-none) '>
          {props.data.tags.map((tag) => (
            <Tag href={`/tags/${tag}`}>{tag}</Tag>
          ))}
        </div>
      )} -->
  </div>
</template>

<style lang="less"></style>
