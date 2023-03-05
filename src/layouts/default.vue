<script lang="ts" setup>
import Sidebar from './components/sidebar.vue'
</script>

<template>
  <div class="flex min-h-screen relative">
    <div class="w-240px px-24px bg-gray-50">
      <sidebar class="sticky top-0"></sidebar>
    </div>
    <div class="min-w-0 max-w-800px px-40px flex-1 mx-auto">
      <router-view></router-view>
    </div>
  </div>
</template>
