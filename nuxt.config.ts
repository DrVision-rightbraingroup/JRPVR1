// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
  ],
  robots: {
    path:
      '~/robots.config',
  },
  css: [
    '~/assets/css/tailwind.css',
  ]
})
