import mdxRaw from '@mdx-js/rollup'
import type { Options } from '@mdx-js/rollup'
import type { SourceDescription } from '@mdx-js/rollup/lib'
import type { Plugin } from 'vite'
import { basename } from 'path'

export function mdx(opt: Options = {}): Plugin {
  const plugin = mdxRaw({
    ...opt,
    jsx: true,
    outputFormat: 'program',
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

      return file
    },
  }
}
