<script setup lang="ts">
defineProps<{
  size?: "sm" | "md";
}>();
</script>

<template>
  <div class="title" :class="{ small: size == 'sm' }">
    <slot></slot>
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
}
</style>
