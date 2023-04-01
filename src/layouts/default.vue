<script lang="ts" setup>
import Sidebar from './components/sidebar.vue'
import { site } from '@/configs'
</script>

<template>
  <div class="flex min-h-screen relative">
    <div class="w-240px px-24px bg-gray-50">
      <sidebar class="sticky top-0"></sidebar>
    </div>
    <div class="min-w-0 max-w-800px px-40px flex-1 mx-auto pt-20px pb-40px">
      <div class="min-h-85vh">
        <router-view></router-view>
      </div>

      <div class="footer mt-6">
        <div class="text-gray-500 text-center">
          Made by
          <a
            :href="`mailto:${site.user.email}`"
            class="text-blue-500 hover:text-blue-600 hover:underline"
          >
            {{ $t('name') }}
          </a>
          with <i-mdi:cards-heart class="text-red-5 relative top-5px animate-bounce" />.
        </div>
      </div>
    </div>
  </div>
</template>
