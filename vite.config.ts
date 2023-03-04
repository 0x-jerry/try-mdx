/// <reference types="vitest" />

import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import imports from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import layouts from 'vite-plugin-vue-layouts'
import pages from 'vite-plugin-pages'
import windicss from 'vite-plugin-windicss'
import icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const host = env.VITE_MAIN_API_HOST

  return {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },

    server: {
      proxy: {
        '/api': {
          target: host,
          changeOrigin: true,
          rewrite: (p) => p.slice('/api'.length),
        },
      },
    },

    plugins: [
      vue(),

      // https://github.com/antfu/unplugin-icons
      icons(),

      // https://github.com/antfu/unplugin-auto-import
      imports({
        dts: 'src/auto-imports.d.ts',
        imports: ['vue', 'vue-router'],
      }),

      // https://github.com/antfu/unplugin-vue-components
      components({
        dts: 'src/auto-components.d.ts',
        dirs: ['src/components', 'src/biz-components'],
        resolvers: [IconsResolver()],
      }),

      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      layouts({
        exclude: ['**/components/*.vue', '**/*.ts'],
      }),

      // https://github.com/hannoeru/vite-plugin-pages
      pages({
        exclude: ['**/components/*.vue', '**/*.ts'],
      }),

      // https://github.com/windicss/vite-plugin-windicss
      windicss({
        config: {
          attributify: true,
        },
      }),
    ],

    optimizeDeps: {
      exclude: [],
    },

    // Vitest is still in development.
    // https://vitest.dev/
    test: {
      global: true,
      environment: 'happy-dom',
    },
  }
})
