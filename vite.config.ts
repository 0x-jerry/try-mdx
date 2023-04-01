import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import imports from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import layouts from 'vite-plugin-vue-layouts'
import pages from 'vite-plugin-pages'
import icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import uno from 'unocss/vite'
import i18n from '@intlify/unplugin-vue-i18n/vite'
import inspect from 'vite-plugin-inspect'
import md from 'vite-plugin-md'
import { site } from './vite/site'
import { plugins } from './vite/md'
import shiki, { type Options as ShikiOption } from 'markdown-it-shiki'

export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    plugins: [
      md({
        markdownItUses: [
          ...plugins,
          [
            shiki,
            {
              theme: 'solarized-light',
              highlightLines: true,
            } satisfies ShikiOption,
          ],
        ],
      }),

      vue({
        include: [/\.vue/, /\.md/],
      }),

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
        dirs: ['src/components'],
        resolvers: [IconsResolver()],
      }),

      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      layouts({
        exclude: ['**/components/*.vue', '**/*.ts'],
      }),

      // https://github.com/hannoeru/vite-plugin-pages
      pages({
        dirs: [
          'src/pages',
          {
            dir: 'docs',
            baseRoute: '/',
          },
        ],
        exclude: ['**/components/*'],
        extensions: ['vue', 'md'],
      }),

      uno(),

      i18n({
        include: ['src/locales/*.yml'],
        strictMessage: false,
      }),

      ...site(),

      mode === 'inspect' && inspect(),
    ],
  }
})
