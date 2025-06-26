<script setup lang="ts">
defineProps<{
  tabs: {
    label: string;
    icon: Object;
  }[];
}>();

const tabIndex = defineModel<number>();

function select(index: number) {
  tabIndex.value = index;
}
</script>

<template>
  <ul class="wrapper">
    <li
      v-for="(tab, index) in tabs"
      class="tab"
      :class="{ active: tabIndex == index }"
      @click="select(index)"
    >
      <div class="tab__icon">
        <component :is="tab.icon" />
      </div>
      <div class="tab__label semibold">
        {{ tab.label }}
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use "~/assets/css/typography";

.wrapper {
  display: flex;

  @media screen and (min-width: 1440px) {
    gap: 16px;
  }
}

.tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  user-select: none;
  cursor: pointer;
  color: var(--color-grey-500);

  &.active {
    color: var(--color-purple-600);
    background-color: var(--color-grey-100);
    border-radius: 8px;
    pointer-events: none;
  }

  &__icon {
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
  }

  &__label {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
    }
  }
}
</style>
