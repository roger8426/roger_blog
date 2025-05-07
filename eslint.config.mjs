// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import prettierPlugin from "eslint-plugin-prettier";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default await withNuxt({
  // 加入自定義配置
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    "prettier/prettier": "error",
    "vue/multi-word-component-names": "off",
  },
  languageOptions: {
    globals: {
      defineNuxtConfig: "readonly",
      defineNuxtPlugin: "readonly",
      useRoute: "readonly",
      useRouter: "readonly",
      useState: "readonly",
    },
  },
});
