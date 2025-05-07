<template>
  <NuxtLayout>
    <h1 class="text-2xl font-bold text-green-400 mb-4">
      {{ displayTitle }}
      <BlinkingCursor
        :show="displayParagraph.length === 0"
        :cursor-class="'text-green-400'"
      />
    </h1>
    <p class="text-gray-300 leading-relaxed">
      {{ displayParagraph }}
      <BlinkingCursor
        :show="displayParagraph.length > 0"
        :cursor-class="'text-gray-300'"
      />
    </p>
  </NuxtLayout>
</template>

<script setup lang="ts">
import BlinkingCursor from "~/components/BlinkingCursor.vue";

const title = "Welcome to Roger's blog";
const paragraph =
  "嗨！我是 Roger，目前專注於 Vue.js 和 Nuxt.js 等前端框架的探索以及各種手刻實用 UI。我將在這裡分享我的學習過程、實驗和一些有趣的項目。";

const displayTitle = ref("");
const displayParagraph = ref("");

const typeText = async (
  text: string,
  targetRef: Ref<string>,
  delay: number = 50
) => {
  for (let i = 0; i < text.length; i++) {
    targetRef.value += text.charAt(i);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
};

onMounted(async () => {
  await typeText(title, displayTitle, 80);
  await typeText(paragraph, displayParagraph, 30);
});
</script>

<style scoped>
@keyframes blink-underscore {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.blink-underscore {
  animation: blink-underscore 1s step-start infinite;
}
</style>
