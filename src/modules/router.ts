import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import type { Plugin } from 'vue'

export const install: Plugin = (app) => {
  const routes = setupLayouts(generatedRoutes)

  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  app.use(router)
}
