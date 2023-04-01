<script lang="ts" setup>
import { site } from '@/configs'

const { sidebar, user } = site
</script>

<template>
  <div class="flex flex-col gap-16px pt-5vh">
    <VLink to="/" class="flex justify-center">
      <div class="rounded-full overflow-hidden h-180px">
        <img
          class="transition duration-1000 rotate-0 hover:rotate-360 w-full h-full object-cover aspect-1/1"
          :src="user.avatar"
        />
      </div>
    </VLink>

    <div class="text-(xl center) whitespace-nowrap flex-1 md:flex-none lg:(text-3xl)">
      {{ user.nick }}
    </div>

    <div class="text-center text-(sm gray-5)" v-html="user.motto"></div>

    <div class="flex justify-center">
      <a v-for="item in sidebar.links" :href="item.href" target="_blank" :title="item.title">
        <component :is="item.icon"></component>
      </a>
    </div>
    <div class="flex flex-col gap-12px">
      <template v-for="item in sidebar.menus">
        <VLink class="hover:decoration-none" :to="item.href">
          <VButton class="w-full" :title="item.title">
            <component :is="item.icon"></component>
            <span class="flex-1 text-center">{{ item.title }}</span>
          </VButton>
        </VLink>
      </template>
    </div>
  </div>
</template>

<style lang="less"></style>
