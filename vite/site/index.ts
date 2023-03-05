import type { Plugin } from 'vite'
import glob from 'fast-glob'
import { watch } from 'chokidar'
import _virtual from 'vite-plugin-virtual'
import type * as VirtualTypedef from 'vite-plugin-virtual'
import matter from 'gray-matter'
import { readFileSync } from 'fs'
import { remove } from '@0x-jerry/utils'
import type { PostItem, SiteConfig } from '@v-site'

const { default: virtual, updateVirtualModule } = _virtual as any as typeof VirtualTypedef

export interface SitePluginOption {
  base?: string
  include?: string[]
}

export function site(opt: SitePluginOption = {}): Plugin[] {
  let isDev = false
  const ID = '@v-site'

  const option: Required<SitePluginOption> = {
    base: 'docs',
    include: ['docs/posts/**/*.md', 'docs/posts/**/*.mdx'],
    ...opt,
  }

  // Chokidar

  function generateConfig() {
    const files = glob.sync(option.include)
    const config: PostItem[] = []

    for (const file of files) {
      const frontmatter = getFrontMatter(file)

      config.push({
        path: file.replace(new RegExp(`^${option.base}`), '').replace(/.mdx?$/, ''),
        data: frontmatter.data as any,
      })
    }

    config.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    return config
  }

  function getFrontMatter(file: string) {
    const txt = readFileSync(file, {
      encoding: 'utf-8',
    })

    const frontmatter = matter(txt)
    return frontmatter
  }

  const siteConfig: SiteConfig = {
    posts: generateConfig(),
  }

  const plugin = virtual({
    [ID]: siteConfig,
  })

  return [
    {
      name: 'vite-plugin-site',
      config(_conf, env) {
        isDev = env.command === 'serve'

        if (!isDev) {
          return
        }

        const watcher = watch(option.include, {
          ignoreInitial: true,
        })

        function updateFrontmatter(file: string, isRemove = false) {
          const path = file.replace(new RegExp(`^${option.base}`), '').replace(/.mdx?$/, '')

          if (isRemove) {
            remove(siteConfig.posts, (t) => t.path === path)

            siteConfig.posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
            updateVirtualModule(plugin, ID, siteConfig)
            console.log('remove frontmatter for', file)
            return
          }

          const frontmatter = getFrontMatter(file)

          const item: PostItem = {
            path: path,
            data: frontmatter.data as any,
          }

          const hit = siteConfig.posts.find((n) => n.path === path)

          if (hit) {
            Object.assign(hit, item)
            console.log('update frontmatter for', file)
          } else {
            siteConfig.posts.push(item)
            console.log('add frontmatter for', file)
          }

          siteConfig.posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
          updateVirtualModule(plugin, ID, siteConfig)
        }

        watcher.on('add', (path) => {
          updateFrontmatter(path)
        })

        watcher.on('change', (path) => {
          updateFrontmatter(path)
        })

        watcher.on('unlink', (path) => {
          updateFrontmatter(path, true)
        })
      },
    },
    plugin,
  ]
}
