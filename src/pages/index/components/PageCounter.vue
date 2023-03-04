<script lang="ts" setup>
import { pageStore } from '../store'

const { store, actions } = pageStore.inject()

actions.plus(0)
actions.plus(0)
</script>

<template>
  <div>Counter title</div>

  <BizCounter v-model="store.counts" />
</template>
