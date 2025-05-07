module.exports = {
  extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  globals: {
    defineNuxtConfig: "readonly",
    defineNuxtPlugin: "readonly",
    useRoute: "readonly",
    useRouter: "readonly",
    useState: "readonly",
  },
};
