import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import imports from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import layouts from 'vite-plugin-vue-layouts'
import pages from 'vite-plugin-pages'
import icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import jsx from '@vitejs/plugin-vue-jsx'
import uno from 'unocss/vite'
import i18n from '@intlify/unplugin-vue-i18n/vite'
import { mdx } from './vite/mdx'

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
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
        dirs: ['src/components'],
        resolvers: [IconsResolver()],
      }),

      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      layouts({
        exclude: ['**/components/*.vue', '**/*.ts'],
      }),

      // https://github.com/hannoeru/vite-plugin-pages
      pages({
        exclude: ['**/components/*.vue', '**/*.ts'],
        extensions: ['vue', 'mdx'],
      }),

      uno(),

      mdx(),

      jsx({
        include: ['**/*.tsx', '**/*.jsx', '**/*.mdx'],
      }),

      i18n({
        include: ['src/locales/*.yml'],
      }),
    ],
  }
})
