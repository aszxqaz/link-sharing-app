<script setup lang="ts">
import { IconLinksHeader, IconProfileDetailsHeader } from "#components";
import { type Image } from "~/components/form/ImagePicker.vue";
import { type Platform, platforms } from "~/shared/schema/platform";
import { getIcon, type PlatformLink, type ProfileDetails } from "~/types/types";

definePageMeta({
  middleware: ["authenticated"],
});

const { user, clear: clearSession } = useUserSession();

const plinks = reactive<
  {
    platform?: Platform;
    url: string;
  }[]
>([]);

const { data } = await useFetch("/api/profile");

const details = reactive<ProfileDetails>({
  email: data.value?.email ?? "",
  firstName: data.value?.firstName ?? "",
  lastName: data.value?.lastName ?? "",
});

const platform = ref<Platform>();

const imgUrl = computed(() => {
  const userId = user.value?.id;
  return (
    userId &&
    "https://akjylyhuoniexoavrnfg.supabase.co/storage/v1/object/public/profile/" +
      userId
  );
});

const image = ref<Image>({
  src: imgUrl.value ?? "",
});

const dropdownItems = computed(() =>
  platforms.map((p) => ({
    value: p,
    label: p,
    icon: getIcon(p),
  }))
);

const tabs = [
  {
    label: "Links",
    icon: IconLinksHeader,
  },
  {
    label: "Profile Details",
    icon: IconProfileDetailsHeader,
  },
];

const tabIndex = ref(0);

const tabHeaders = computed(() =>
  tabIndex.value == 0
    ? {
        title: "Customize your links",
        desc: "Add/edit/remove links below and then share all your profiles with the world!",
      }
    : {
        title: "Profile Details",
        desc: "Add your details to create a personal touch to your profile.",
      }
);

const skeletonLinks = computed(
  () => plinks.filter((l) => l.platform) as PlatformLink[]
);

async function updateProfile() {
  // const body: UpdateProfileSchema = {
  //   ...details,
  //   imgSrc: "",
  //   links: {},
  // };

  // await $fetch("/api/profile", {
  //   method: "PUT",
  //   body,
  // });

  if (image.value && image.value.file) {
    const fd = new FormData();
    fd.append("image", image.value.file);

    await $fetch("/api/image", {
      method: "PUT",
      body: fd,
    });
  }
}

async function logOut() {
  await clearSession();
  await navigateTo("/login");
}
</script>

<template>
  <header class="header">
    <IconDevLinksLarge class="header__logo-large" />
    <IconDevLinksSmall class="header__logo-small" />
    <NavigationTabSwitcher
      class="header__tabswitcher"
      :tabs="tabs"
      v-model="tabIndex" />
    <div class="header__btn-group">
      <FormButton class="button" outlined>Preview</FormButton>
      <FormButton class="button danger" outlined @click="logOut"
        >Logout</FormButton
      >
    </div>
  </header>
  <div class="profile">
    <ContentCard class="profile__preview preview">
      <div class="preview__smartphone smartphone">
        <IconSmartphone class="smartphone__icon" />
        <AppPreviewSkeleton
          class="smartphone__skeleton"
          :profile="details"
          :img-base64="image?.src"
          :img-url="imgUrl"
          :links="skeletonLinks" />
      </div>
    </ContentCard>
    <ContentCard class="profile__active-tab">
      <template #title>{{ tabHeaders.title }}</template>
      <template #desc>{{ tabHeaders.desc }} </template>
      <template #default>
        <SectionCustomizeLinks v-if="tabIndex == 0" v-model="plinks" />
        <SectionProfileDetails
          v-if="tabIndex == 1"
          v-model:details="details"
          v-model:image="image" />
      </template>
      <template #footer>
        <FormButton class="profile__save-btn" @click="updateProfile"
          >Save</FormButton
        >
      </template>
    </ContentCard>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px;
  padding: 16px 24px;

  &__logo-large {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
      width: 146px;
      height: 32px;
    }
  }

  &__logo-small {
    display: block;
    width: 32px;
    height: 32px;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  &__btn-group {
    display: flex;
    gap: 16px;
  }
}

.button {
  width: 108px;

  &.danger {
    color: var(--color-red-500);
    border: 1px solid var(--color-red-500);

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--color-red-500) 5%,
        transparent
      );
    }
  }
}

.profile {
  margin-bottom: 24px;
  padding-inline: 24px;
  display: flex;
  gap: 24px;
  width: 100%;

  &__preview {
    flex-basis: 560px;
    flex-shrink: 0;
  }

  &__active-tab {
    min-height: 100%;
    flex-grow: 1;
  }

  &__save-btn {
    width: max-content;
    margin-left: auto;
  }
}

.preview {
  display: grid;
  place-items: center;
  height: 864px;
}

.smartphone {
  position: relative;

  &__skeleton {
    position: absolute;
    inset: 0;
    padding-top: 64px;
    padding-inline: 35px;
  }
}
</style>
