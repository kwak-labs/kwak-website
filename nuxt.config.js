// https://nuxt.com/docs/api/configuration/nuxt-config
import { nodePolyfills } from "vite-plugin-node-polyfills";
export default defineNuxtConfig({
  mode: "spa",
  typescript: false,
  target: "static",
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/public/css/style.css",
  ],
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
  builder: "vite",
  experimental: {
    payloadExtraction: false,
  },
  generate: {
    fallback: "index.html",
  },
  vite: {
    plugins: [
      nodePolyfills({
        // To exclude specific polyfills, add them to this list.
        exclude: [
          "fs", // Excludes the polyfill for `fs` and `node:fs`.
        ],
        // Whether to polyfill specific globals.
        globals: {
          Buffer: true, // can also be 'build', 'dev', or false
          global: true,
          process: true,
        },
        // Whether to polyfill `node:` protocol imports.
        protocolImports: true,
      }),
    ],
  },
});
