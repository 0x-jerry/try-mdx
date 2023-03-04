//  windicss
import 'virtual:windi.css'

import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App)

// install all modules
Object.values(import.meta.globEager('./modules/*.ts')).forEach((m) => {
  m.install?.(app)
})

app.mount('#app')
