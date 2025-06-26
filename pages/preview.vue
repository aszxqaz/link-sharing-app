<script setup lang="ts">
definePageMeta({
  //@ts-ignore
  middleware: "auth",
  // or middleware: 'auth'
});
</script>

<template>
  <div class="preview">
    <div class="preview__background"></div>
    <div class="preview__panel panel">
      <FormButton outlined class="panel__button">Back to Editor</FormButton>
      <FormButton class="panel__button">Share Link</FormButton>
    </div>
    <div class="preview__card card">
      <div class="card__container">
        <AppPreviewSkeleton
          :links="[]"
          :profile="{
            firstName: 'Peter',
            email: 'asdasdas@asdas.com',
            lastName: 'Jackson',
          }"
        >
          <template #fullname="{ fullname }">
            <div class="xl-bold">{{ fullname }}</div>
          </template>
        </AppPreviewSkeleton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preview {
  position: relative;

  &__background {
    @media screen and (min-width: 768px) {
      position: absolute;
      inset: 0;
      height: 357px;
      padding: 24px;
      background-color: var(--color-purple-600);
      border-radius: 0 0 32px 32px;
    }
  }

  &__panel {
    @media screen and (min-width: 768px) {
      position: absolute;
      top: 24px;
      left: 24px;
      right: 24px;
    }
  }

  &__card {
    position: absolute;
    top: 224px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.panel {
  display: flex;
  gap: 16px;
  padding: 16px 16px 16px 24px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    gap: 0;
    background-color: white;
    border-radius: 12px;
  }

  &__button {
    @media screen and (min-width: 768px) {
      width: max-content !important;
      padding-inline: 24px;
    }
  }
}

.card {
  background-color: white;
  border-radius: 24px;
  padding: 48px 56px;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.1);

  &__container {
    width: 237px;
  }
}
</style>
