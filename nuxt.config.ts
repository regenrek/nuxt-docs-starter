// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image'],
  routeRules: {
    '/': { prerender: true }
  },
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-light'
    }
  }
})