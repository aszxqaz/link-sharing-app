<script setup lang="ts">
import { type Platform, platforms } from "~/shared/schema/platform";

const plinks = defineModel<
  {
    platform?: Platform;
    url: string;
  }[]
>();

const platformsSet = computed(() => {
  if (!plinks.value) return [];
  return plinks.value!.filter((link) => link.platform).map((p) => p.platform!);
});

const emit = defineEmits<{
  (e: "save"): void;
}>();

function addLink() {
  plinks.value?.push({
    url: "",
  });
}
</script>

<template>
  <div class="content">
    <div class="content__actions">
      <FormButton outlined @click="addLink">+ Add new link</FormButton>
    </div>
    <div v-if="plinks?.length" class="content__link-forms">
      <template v-for="(_, index) in plinks">
        <AppLinkForm
          v-model="plinks![index]"
          :index="index + 1"
          :platforms="Array.from(platforms).filter(p => !platformsSet.includes(p as Platform))"
          placeholder="Select platform" />
      </template>
    </div>
    <div v-else class="content__welcome welcome">
      <IconIllustrationEmpty class="welcome__image" />
      <h2 class="welcome__title title-responsive">Let’s get you started</h2>
      <p class="welcome__desc tinted">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  margin-bottom: 40px;
}

.content {
  min-height: 100%;
  display: flex;
  flex-direction: column;

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 24px;
  }

  &__link-forms {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__welcome {
    flex-grow: 1;
  }
}

.footer {
  display: flex;

  &__save-btn {
    margin-left: auto;
    width: 85px;
  }
}

.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;

  text-align: center;
  padding: 24px;
  background-color: var(--color-grey-50);
  border-radius: 12px;

  &__image {
    margin-bottom: 40px;
  }

  &__title {
    margin-bottom: 24px;
  }

  &__desc {
    max-width: 488px;
  }
}
</style>
