<template>
  <span v-if="show" class="blink-underscore" :class="cursorClass">_</span>
</template>

<script setup lang="ts">
import type { BlinkingCursorProps } from "~/types/components/blinking-cursor";

withDefaults(defineProps<BlinkingCursorProps>(), {
  cursorClass: "",
  show: true,
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
