// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  modules: [
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "@pinia/nuxt",
  ],
  tailwindcss: {
  },
  // app: {
  //   pageTransition: { name: "pages", mode: "in-out" },
  // },
  build: {
    transpile: ["primevue"],
  },
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  plugins: [{ src: "~/plugins/primevue.js", ssr: false }],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
});
