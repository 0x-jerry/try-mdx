<script lang="ts" setup>
import Sidebar from './components/sidebar.vue'
</script>

<template>
  <div class="flex">
    <sidebar class="w-240px px-24px"></sidebar>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
