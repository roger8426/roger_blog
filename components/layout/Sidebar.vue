<template>
  <ul class="mt-2 ml-4 space-y-1">
    <template v-for="group in menu" :key="group.title">
      <li>
        <!-- 主分類 -->
        <div
          class="flex items-center gap-1 cursor-pointer text-gray-200 hover:text-white"
          @click="toggleOpen(group.title)"
        >
          <SvgIcon
            name="down-arrow"
            class="size-4 transition-transform duration-100"
            :class="{ '-rotate-90': !openMap[group.title] }"
          />
          <span class="text-sm">{{ group.title }}</span>
        </div>

        <!-- 子文章列表 -->
        <ul v-if="openMap[group.title]" class="ml-5 mt-1 space-y-1">
          <li
            v-for="child in group.children"
            :key="child.title"
            class="text-xs text-gray-400 hover:text-white cursor-pointer"
          >
            <NuxtLink :to="child.link">{{ child.title }}</NuxtLink>
          </li>
        </ul>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import type { MenuItem } from "~/types/components/sidebar";
import SvgIcon from "~/components/ui/SvgIcon.vue";

const menu: MenuItem[] = [
  {
    title: "JS, TS 筆記",
    children: [
      {
        title: "test1",
        link: "/",
      },
      {
        title: "test2",
        link: "/",
      },
    ],
    link: "/",
  },
  {
    title: "Vue 全家桶",
    children: [
      {
        title: "test3",
        link: "/",
      },
      {
        title: "test4",
        link: "/",
      },
    ],
    link: "/",
  },
  {
    title: "UI Libraries",
    children: [
      {
        title: "test5",
        link: "/",
      },
      {
        title: "test6",
        link: "/",
      },
    ],
    link: "/",
  },
  {
    title: "實用工具",
    children: [
      {
        title: "test7",
        link: "/",
      },
      {
        title: "test8",
        link: "/",
      },
    ],
    link: "/",
  },
];

const openMap = ref<Record<string, boolean>>({});

const toggleOpen = (title: string) => {
  openMap.value[title] = !openMap.value[title];
};
</script>
