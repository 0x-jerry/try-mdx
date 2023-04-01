<template>
  <router-view></router-view>
</template>

<style lang="less">
html {
  @apply text-gray-7;
  scroll-behavior: smooth;
  overflow: overlay;
}

*::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background: rgba(194, 194, 194, 0.5);
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb {
  background: rgba(170, 170, 170, 0.9);
  border-radius: 10px;
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

  pre code {
    position: relative;
    display: inline-block;

    .line.highlighted {
      background: #d8d8d87a;
      width: calc(100% + 16px * 2);
      position: relative;
      left: -16px;
      display: block;
    }
  }
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
