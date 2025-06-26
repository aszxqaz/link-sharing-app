<script setup lang="ts">
import { IconLink } from "#components";
import { type Platform } from "~/shared/schema/platform";
import { getIcon } from "~/types/types";

const props = defineProps<{
  index: number;
  error?: string;
  hint?: string;
  platforms: Platform[];
}>();

const plink = defineModel<{
  platform?: Platform;
  url: string;
}>({ required: true });

const emit = defineEmits<{
  (e: "remove"): void;
}>();

const drowpDownItems = props.platforms.map((p) => ({
  value: p,
  label: p,
  icon: getIcon(p),
}));
</script>

<template>
  <div>
    <div class="card">
      <div class="card__header header">
        <div class="header__link link tinted">
          <div class="link__icon">
            <IconDragAndDrop />
          </div>
          <div class="link__label bold">Link #{{ index }}</div>
        </div>
        <div @click="emit('remove')" class="header__remove">Remove</div>
      </div>
      <div class="card__content content">
        <FormDropdown
          v-model="plink.platform"
          placeholder="Select platform"
          :placeholder-icon="IconLink"
          label="Platform"
          :items="drowpDownItems" />
        <FormTextInput
          v-model="plink.url"
          :prefix-icon="IconLink"
          label="Link"
          placeholder="e.g. https://www.github.com/johnappleseed" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/css/typography";

.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: var(--color-grey-50);
  border-radius: 12px;
}

.header {
  display: flex;
  justify-content: space-between;

  &__remove {
    user-select: none;
    cursor: pointer;
  }
}

.link {
  display: flex;
  align-items: center;
  gap: 8px;

  &__icon {
    display: grid;
    place-items: center;
  }

  &__label {
    user-select: none;
  }
}

.content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
