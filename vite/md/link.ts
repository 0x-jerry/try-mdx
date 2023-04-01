import type { PluginSimple } from 'markdown-it'
import type Token from 'markdown-it/lib/token'
import { renderToken } from './utils'

export const link: PluginSimple = (md) => {
  const rawRender = md.renderer.rules.link_open

  md.renderer.rules.link_open = (tokens, idx, ...args) => {
    const token = tokens[idx]

    modifyHref(token)

    return renderToken(rawRender)(tokens, idx, ...args)
  }
}

function modifyHref(token: Token) {
  const href = token.attrGet('href')
  if (!href) return

  if (!isRelativeMdFile(href)) return

  token.attrSet('href', href.slice(0, -'.md'.length))
}

function isRelativeMdFile(n: string) {
  return !n.startsWith('http') && n.endsWith('.md')
}
