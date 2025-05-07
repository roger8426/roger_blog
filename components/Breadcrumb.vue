<template>
  <nav class="flex items-center text-gray-400 space-x-1 text-xs">
    <template v-for="(crumb, index) in breadcrumbs" :key="index">
      <NuxtLink
        v-if="index !== breadcrumbs.length - 1"
        :to="crumb.to"
        class="hover:underline hover:text-blue-400"
      >
        {{ crumb.label }}
        <span class="px-1 text-gray-500">/</span>
      </NuxtLink>
      <span v-else class="text-gray-300 italic">
        {{ crumb.label }}
      </span>
    </template>
  </nav>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const breadcrumbs = computed(() => {
  const route = useRoute();
  const path = route?.path ?? "";
  const segments = path.split("/").filter(Boolean);

  return segments.map((seg, index) => ({
    label: decodeURIComponent(seg),
    to: "/" + segments.slice(0, index + 1).join("/"),
  }));
});
</script>
