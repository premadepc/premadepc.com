// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-08-03', // Updated to today's date
  devtools: { enabled: false },
  // Global page headers
  app: {
    head: {
      title: 'Premade PCs',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Buy your next computer here!' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  // Modules
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  // Include global CSS
  css: [
    '@/assets/css/global.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/vue-fontawesome'
    ]
  }
})
