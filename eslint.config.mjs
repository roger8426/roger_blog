// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import prettierPlugin from "eslint-plugin-prettier";
import tsParser from "@typescript-eslint/parser";
import vueParser from "vue-eslint-parser";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default await withNuxt({
  plugins: {
    prettier: prettierPlugin,
  },
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: tsParser, // 用來解析 <script lang="ts">
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
  rules: {
    "prettier/prettier": "error",
    "vue/multi-word-component-names": "off",
  },
});
