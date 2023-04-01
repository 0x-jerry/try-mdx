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
    <div class="flex-(~ wrap) gap-2 items-center">
      <VTag>{{ dayjs(props.data.date).format('YYYY-MM-DD') }}</VTag>

      <VLink :to="path"> {{ data.title }}</VLink>
    </div>
  </div>
</template>

<style lang="less"></style>
