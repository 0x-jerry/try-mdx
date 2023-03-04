import { Plugin } from 'vue'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { createI18n } from 'vue-i18n'

console.log(messages)

const i18n = createI18n({
  locale: navigator.language,
  messages,
  fallbackWarn: false,
  missingWarn: false,
})

// @ts-ignore
export const t = i18n.global.t

export const install: Plugin = (app) => {
  app.use(i18n)
}
