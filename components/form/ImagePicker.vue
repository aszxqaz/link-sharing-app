<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

export type Image = {
  src: string;
  file?: File;
};

const image = defineModel<Image>();

const input = useTemplateRef("file");

onMounted(() => {
  input.value?.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      const file = this.files[0];
      const reader = new FileReader();
      reader.onload = function () {
        image.value = {
          src: reader.result as string,
          file,
        };
      };
      reader.readAsDataURL(this.files[0]);
    }
  });
});

function onClick() {
  input.value?.click();
}
</script>

<template>
  <div @click="onClick" class="picker">
    <div class="picker__input input">
      <div
        class="input__back"
        :style="{
          'background-image': image ? 'url(' + image.src + ')' : 'unset',
        }"></div>
      <div v-if="image" class="input__backdrop"></div>
      <div class="input__front front" :class="{ active: image }">
        <div class="front__icon">
          <IconUploadImage />
        </div>
        <div class="front__label md-semibold">
          {{ image ? "Change image" : "+ Upload image" }}
        </div>
      </div>
    </div>
    <div class="picker__instructions tinted-sm">
      Image must be below 1024x1024px. Use PNG or JPG format.
    </div>
    <input ref="file" type="file" accept="image/png, image/jpeg" hidden />
  </div>
</template>

<style lang="scss" scoped>
.picker {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }

  &__instructions {
    display: grid;
    place-items: center;
    max-width: 120px;
  }
}

.input {
  position: relative;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;

  &__back {
    width: 150px;
    height: 150px;
    background-color: var(--color-grey-100);
    background-size: cover;
    background-position: center;

    @media screen and (min-width: 768px) {
      width: 193px;
      height: 193px;
    }
  }

  &__backdrop {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__front {
    position: absolute;
    inset: 0;
  }
}

.front {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-purple-600);

  &__icon {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  &__label {
    user-select: none;
  }

  &.active {
    color: white;
  }
}
</style>
