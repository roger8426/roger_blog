// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import prettierPlugin from "eslint-plugin-prettier";
import tsParser from "@typescript-eslint/parser";
import vueParser from "vue-eslint-parser";
import prettierConfig from "eslint-config-prettier";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  // Nuxt 設定
  ...(await withNuxt({
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",
        extraFileExtensions: [".vue"],
      },
      globals: {
        defineNuxtConfig: "readonly",
        defineNuxtPlugin: "readonly",
        useRoute: "readonly",
        useRouter: "readonly",
        useState: "readonly",
      },
    },
  })),
  {
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
  prettierConfig,
];
