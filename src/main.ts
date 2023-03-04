//  windicss
import 'uno.css'

import App from './App.vue'
import { createApp, Plugin } from 'vue'

const app = createApp(App)

// install all modules
Object.values(import.meta.glob<Plugin>('./modules/*.ts', { eager: true })).forEach((m) => {
  m.install?.(app)
})

app.mount('#app')
