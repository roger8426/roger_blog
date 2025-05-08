<template>
  <div class="flex h-screen bg-[#1e1e1e] text-gray-200 font-mono text-sm">
    <!-- 側邊欄 -->
    <aside class="w-60 bg-[#252526] border-r border-[#333] p-4">
      <div class="flex items-center gap-1">
        <div
          class="cursor-pointer duration-100"
          :class="{ '-rotate-90': arrowTurn }"
          @click="handleSidebar"
        >
          <SvgIcon name="down-arrow" class="size-4" />
        </div>
        <p class="text-gray-400">Roger.Lo's Blog</p>
      </div>
      <slot name="sidebar">
        <!-- 預設可插入文章清單 -->
      </slot>
    </aside>

    <!-- 主內容區 -->
    <div class="flex-1 flex flex-col">
      <!-- Tab 標籤列（可選） -->
      <header
        class="h-10 bg-[#2d2d2d] border-b border-[#333] flex items-center px-4"
      >
        <Breadcrumb />
      </header>

      <!-- 主文章內容 -->
      <main class="flex-1 overflow-y-auto p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from "~/components/common/Breadcrumb.vue";
import SvgIcon from "~/components/ui/SvgIcon.vue";

const arrowTurn = ref(false);

const handleSidebar = () => {
  arrowTurn.value = !arrowTurn.value;
};
</script>

<style scoped>
/* 捲軸美化 */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #555;
  border-radius: 4px;
}
</style>
