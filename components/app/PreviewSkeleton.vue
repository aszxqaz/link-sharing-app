<script setup lang="ts">
import type { PlatformLink, ProfileDetails } from "~/types/types";

const props = defineProps<{
  preview?: boolean;
  profile: ProfileDetails;
  imgBase64?: string;
  imgUrl?: string;
  links: PlatformLink[];
}>();

const fullname = computed(() => {
  return [props.profile.firstName, props.profile.lastName]
    .filter((n) => n.length)
    .join(" ");
});

const imageUrl = computed(() => {
  return props.imgBase64 ?? props.imgUrl;
});
</script>

<template>
  <div>
    <div class="preview">
      <div class="preview__profile profile">
        <div
          class="profile__picture picture"
          :style="{
            backgroundImage: imgUrl ? `url(${imgUrl})` : 'none',
          }"></div>
        <div class="profile__details details">
          <div v-if="fullname" class="details__fullname">
            <slot name="fullname" :fullname="fullname">
              {{ fullname }}
            </slot>
          </div>
          <div v-else class="details__f-placeholder"></div>
          <div v-if="props.profile.email" class="details__email">
            {{ props.profile.email }}
          </div>
          <div v-else class="details__e-placeholder"></div>
        </div>
      </div>
      <div class="preview__buttons buttons">
        <PreviewButton
          :small="!preview"
          v-for="link in links"
          :link="{
            platform: link.platform,
            url: 'google.com',
          }" />
        <div
          v-if="!preview"
          v-for="n in 5 - links.length"
          class="buttons__placeholder"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preview {
  &__profile {
    height: 158px;
    margin-bottom: 56px;
  }

  &__buttons {
    height: 300px;
  }
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__picture {
    margin-bottom: 25px;
  }
}

.details {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__fullname {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.5;
  }

  &__email {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: var(--color-grey-500);
  }

  &__f-placeholder {
    margin-bottom: 13px;
    width: 160px;
    height: 16px;
  }

  &__e-placeholder {
    width: 72px;
    height: 8px;
  }

  &__f-placeholder,
  &__e-placeholder {
    border-radius: 104px;
    background-color: var(--color-grey-100);
  }
}

.picture {
  width: 96px;
  height: 96px;
  border-radius: 100%;
  background-size: cover;
  background-position: center;
  background-color: var(--color-grey-100);
}

.buttons {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__placeholder {
    height: 44px;
    background-color: var(--color-grey-100);
    border-radius: 8px;
  }
}
</style>
