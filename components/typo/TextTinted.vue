<script setup lang="ts">
defineProps<{
  size?: "sm" | "md";
}>();
</script>

<template>
  <p class="tinted" :class="{ small: size == 'sm' }"><slot></slot></p>
</template>

<style scoped>
.tinted {
  color: var(--text-tinted-color);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  &.small {
    font-size: 12px;
  }
}
</style>
