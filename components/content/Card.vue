<script setup lang="ts">
defineProps<{
  hideOnMobile?: boolean;
}>();

defineSlots<{
  default(): any;
  title(): any;
  footer(): any;
  desc(): any;
}>();
</script>

<template>
  <section class="content-card" :class="{ dissolved: hideOnMobile }">
    <header class="content-card__header">
      <h1 v-if="$slots.title" class="title bold">
        <slot name="title"></slot>
      </h1>
      <p v-if="$slots.desc" class="tinted">
        <slot name="desc"></slot>
      </p>
    </header>
    <div class="content-card__content">
      <slot></slot>
    </div>
    <footer v-if="$slots.footer" class="content-card__footer">
      <slot name="footer"></slot>
    </footer>
  </section>
</template>

<style scoped lang="scss">
.content-card {
  display: flex;
  flex-direction: column;
  padding: 24px;

  &:not(.dissolved) {
    background-color: white;
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  &__header {
    margin-bottom: 40px;
  }

  &__content {
    flex-grow: 1;
  }

  &__footer {
    margin-top: 40px;
    display: flex;
    border-top: 1px solid var(--color-grey-200);
    padding-top: 24px;
  }
}

.title {
  font-size: 24px;
  color: var(--color-grey-900);

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
}
</style>
