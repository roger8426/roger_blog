<template>
  <component :is="iconComponent" v-if="iconComponent" />
</template>

<script setup lang="ts">
import { useIcon } from "~/composables/useIcon";
import type { IconName } from "~/types/components/icon";

const props = defineProps<{
  name: IconName;
}>();

const { getIcon } = useIcon();
const iconComponent = getIcon(props.name);
</script>
