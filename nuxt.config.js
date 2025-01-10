// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  mode: "spa",
  ssr: true,
  typescript: false,
  target: "static",
  css: ["~/public/css/style.css", "~/assets/fonts.css"],

  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
      title: "kwak",
    },
  },

  nitro: {
    prerender: {
      ignore: ["404.html"],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  builder: "vite",

  experimental: {
    payloadExtraction: false,
  },

  generate: {
    fallback: "index.html",
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2025-01-09",
});