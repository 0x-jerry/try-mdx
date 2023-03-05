import mdxRaw from '@mdx-js/rollup'
import type { Options } from '@mdx-js/rollup'
import type { SourceDescription } from '@mdx-js/rollup/lib'
import type { Plugin } from 'vite'
import remarkFrontmatter from 'remark-frontmatter'

import { basename } from 'path'

export function mdx(opt: Options = {}): Plugin {
  const plugin = mdxRaw({
    ...opt,
    jsx: true,
    outputFormat: 'program',
    remarkPlugins: [remarkFrontmatter],
  })

  let isDev = false
  return {
    name: '@mdx-js/rollup-vue',
    config(_conf, env) {
      isDev = env.command === 'serve'
    },
    async transform(value, path) {
      if (typeof plugin.transform !== 'function') return

      const file = (await plugin.transform.call(this, value, path)) as SourceDescription

      if (!file) return

      fixVueRouter()
      fixRelativeResource()

      return file

      function fixRelativeResource() {
        let idx = 0
        const resourceMap: Record<string, string> = {}

        // src="./docker-on-raspberrypi/2020-05-31T211438.png"
        file.code = file.code.replace(/src="[^"]+"/g, (src) => {
          const url = src.slice('src="'.length, -1)

          if (!url.startsWith('.')) {
            return src
          }

          let currentIdx = idx++
          resourceMap[currentIdx] = url
          return `src={__res${currentIdx}}`
        })

        const lines = Object.entries(resourceMap)
          .map(([key, value]) => {
            return `import __res${key} from ${JSON.stringify(value)}`
          })
          .join('\n')

        file.code = [lines, file.code].join('\n')
      }

      function fixVueRouter() {
        const codes: string[] = []

        const devInfo = isDev ? `  __file: ${JSON.stringify(path)},` : ''

        codes.push(`import { defineComponent } from 'vue'

      export default defineComponent({
        name: ${JSON.stringify(basename(path))},
        ${devInfo}
        setup: (props) => () => MDXContent(props),
      })
      `)

        file.code = file.code.replace(/^export\s+default.+$/m, codes.join('\n'))
      }
    },
  }
}
