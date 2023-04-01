<script lang="ts" setup>
import ts from '~icons/vscode-icons/file-type-typescript'
import js from '~icons/vscode-icons/file-type-js'
import rust from '~icons/vscode-icons/file-type-rust'
import wasm from '~icons/logos/webassembly'
import vscode from '~icons/vscode-icons/file-type-vscode'
import browser from '~icons/bi/browser-chrome'
import diary from '~icons/mingcute/diary-fill'
import blogger from '~icons/logos/blogger'
import vue from '~icons/vscode-icons/file-type-vue'
import linux from '~icons/logos/linux-tux'
import docker from '~icons/vscode-icons/file-type-docker2'
import nuxt from '~icons/vscode-icons/file-type-nuxt'
import git from '~icons/vscode-icons/file-type-git'
import travis from '~icons/vscode-icons/file-type-travis'
import hexo from '~icons/logos/hexo'
import nodejs from '~icons/logos/nodejs-icon'
import coveralls from '~icons/vscode-icons/file-type-coveralls'
import ubuntu from '~icons/logos/ubuntu'
import regex from '~icons/bi/regex'
import nginx from '~icons/vscode-icons/file-type-nginx'
import laptop from '~icons/icon-park/laptop-computer'
import ml from '~icons/eos-icons/machine-learning'
import performance from '~icons/eos-icons/performance'
import lock from '~icons/material-symbols/lock'
import workspace from '~icons/carbon/workspace'
import system from '~icons/nimbus/ecosystem'
import grpc from '~icons/logos/grpc'
import thinking from '~icons/noto/thinking-face'

const props = defineProps<{
  name?: string
}>()

const map: Record<string, Component> = {
  think: thinking,
  thinking,
  grpc,
  system,
  machinelearning: ml,
  systemdesign: system,
  workspace,
  encrypt: lock,
  performance,
  ml,
  frontend: laptop,
  nginx,
  regex,
  ubuntu,
  coveralls,
  nodejs,
  node: nodejs,
  travis,
  travisci: travis,
  git,
  hexo,
  nuxt,
  nuxtjs: nuxt,
  vue3: vue,
  ts,
  typescript: ts,
  js,
  javascript: js,
  rust,
  rs: rust,
  webassembly: wasm,
  wasm,
  vscode,
  browser,
  web: browser,
  diary,
  blogger,
  blog: blogger,
  vue,
  linux,
  docker,
}

const icon = computed(() => props.name && map[props.name.replace(/\s+/g, '').toLocaleLowerCase()])
</script>

<template>
  <component v-if="icon" :is="icon"></component>
</template>

<style lang="less"></style>
