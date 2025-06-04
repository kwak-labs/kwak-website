// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

  app: {
    head: {
      title: "kwak - Blockchain Infrastructure & Development Services",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { key: 'description', name: 'description', content: 'Professional blockchain infrastructure and development services.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },

  nitro: {
    preset: "cloudflare-pages",
  },

  ssr: true,
});
