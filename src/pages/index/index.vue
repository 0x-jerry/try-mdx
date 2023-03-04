<script lang="ts" setup>
import PageCounter from './components/PageCounter.vue'

import { pageStore } from './store'

const { store } = pageStore.provide()
</script>

<template>
  <div>Total counter: {{ store.counts.length }}</div>
  <PageCounter></PageCounter>
</template>
