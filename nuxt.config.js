// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  ssr: true,
  typescript: false,
  nitro: {
    preset: "static",
  },
  css: ["~/public/css/style.css", "~/assets/fonts.css"],
  app: {
    head: {
      title: "kwak",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  build: {
    transpile: ["vue"],
  },
  experimental: {
    payloadExtraction: false,
  },
});
