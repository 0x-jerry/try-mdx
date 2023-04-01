<template>
  <router-view></router-view>
</template>

<style lang="less">
html {
  color: #333;
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

  // &:visited {
  //   color: default;
  // }
}
</style>
