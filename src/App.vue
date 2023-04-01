<template>
  <router-view></router-view>
</template>

<style lang="less">
html {
  @apply text-gray-7;
}

/* 霞鹜文楷 */
body {
  font-family: LXGWWenKai, sans-serif;
}

/* 霞鹜文楷 Mono */
pre,
code {
  font-family: LXGWWenKaiMono, monospace;
}

.markdown-body {
  font-family: LXGWWenKai, sans-serif;
}

body a {
  appearance: none;
  text-decoration: none;

  @apply transition;
  @apply text-blue-5;

  &:hover {
    text-decoration: underline;
  }
}

hr {
  border: 0 solid #e5e7eb;
  border-top-width: 1px;
}
</style>
