import type { PluginSimple } from 'markdown-it'
import { renderToken } from './utils'

export const lazyImg: PluginSimple = (md) => {
  const defaultRender = md.renderer.rules.image

  md.renderer.rules.image = function (tokens, idx, ...args) {
    const token = tokens[idx]

    token.attrSet('loading', 'lazy')

    return renderToken(defaultRender)(tokens, idx, ...args)
  }
}
