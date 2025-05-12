import tailwindcss from "@tailwindcss/vite";
import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/content", "@nuxtjs/i18n"],
  css: ["~/assets/styles/tailwind.css"],
  vite: {
    plugins: [tailwindcss(), svgLoader()],
  },
  i18n: {
    lazy: true,
    langDir: "locales/",
    defaultLocale: "zh",
    locales: [
      { code: "zh", file: "zh.json", name: "繁體中文" },
      { code: "en", file: "en.json", name: "English" },
    ],
  },
});
