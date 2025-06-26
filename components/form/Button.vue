<script setup lang="ts">
defineProps<{
  outlined?: boolean;
}>();
</script>

<template>
  <button class="button semibold" :class="{ outlined }">
    <slot>Submit</slot>
  </button>
</template>

<style lang="css" scoped>
.button {
  width: 100%;
  padding-inline: 24px;
  font-weight: 600 !important;
  color: var(--button-fg-color);
  background-color: var(--button-bg-color);
  border-radius: var(--default-border-radius);
  min-height: 56px;
  transition: 0.2 ease-out;
  cursor: pointer;

  &:hover {
    background-color: var(--button-bg-color-hover);
  }

  &:disabled {
    background-color: var(--button-bg-color);
  }

  &.outlined {
    color: var(--button-bg-color);
    border: 1px solid var(--button-bg-color);
    background-color: var(--button-fg-color);

    &:hover {
      background-color: var(--button-outlined-bg-color);
    }

    &:disabled {
      background-color: var(--button-fg-color);
      cursor: default;
      opacity: 25%;
    }
  }
}
</style>
