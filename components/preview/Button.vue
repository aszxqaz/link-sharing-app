<script setup lang="ts">
import { getColor, getIcon, type PlatformLink } from "~/types/types";

defineOptions({
  inheritAttrs: false,
});

defineProps<{
  small?: boolean;
  link: PlatformLink;
}>();
</script>

<template>
  <a
    :href="link.url"
    class="button"
    :class="{ small }"
    :style="{
      background: getColor(link.platform),
    }"
  >
    <div class="button__icon">
      <component
        :is="getIcon(link.platform)"
        :in-color="getColor(link.platform)"
      />
    </div>
    <div class="button__label" :class="[small ? 'xs' : 'text-body-md']">
      {{ link.platform }}
    </div>
    <div class="button__arrow">
      <IconArrowRight />
    </div>
  </a>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 56px;
  color: white;
  padding-inline: 16px;
  border-radius: 8px;

  &.small {
    height: 44px;
  }

  &__label {
    flex-grow: 1;
  }

  &__icon,
  &__arrow {
    width: 16px;
    height: 16px;
  }
}
</style>
