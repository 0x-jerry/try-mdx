import App from './App.vue'
import { createApp, type Plugin } from 'vue'
import { createHead } from '@vueuse/head'

import 'normalize.css'
import 'uno.css'

const app = createApp(App)

// install all modules
Object.values(import.meta.glob<Plugin>('./modules/*.ts', { eager: true })).forEach((m) => {
  m.install?.(app)
})

app.use(createHead())

app.mount('#app')
