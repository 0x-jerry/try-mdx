import { RenderRule } from 'markdown-it/lib/renderer'
import Token from 'markdown-it/lib/token'

export function renderToken(
  defaultRenderer?: RenderRule,
  rule?: (token: Token) => string,
): RenderRule {
  return (tokens, idx, opt, env, self) => {
    return defaultRenderer
      ? defaultRenderer(tokens, idx, opt, env, self)
      : rule
      ? rule(tokens[idx])
      : self.renderToken(tokens, idx, opt)
  }
}
