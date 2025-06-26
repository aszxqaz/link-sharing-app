<script setup lang="ts">
import type { ProfileDetails } from "~/types/types";
import type { Image } from "../form/ImagePicker.vue";

const details = defineModel<ProfileDetails>("details", { required: true });
const image = defineModel<Image>("image");
</script>

<template>
  <div class="details">
    <div class="card">
      <div class="cols">
        <div class="cols__label tinted">Profile picture</div>
        <div class="cols__field">
          <FormImagePicker v-model="image" />
        </div>
      </div>
    </div>
    <div class="card">
      <div class="row">
        <div class="cols">
          <div class="cols__label tinted">First name*</div>
          <div class="cols__field">
            <FormTextInput v-model="details.firstName" />
          </div>
        </div>
        <div class="cols">
          <div class="cols__label tinted">Last name*</div>
          <div class="cols__field">
            <FormTextInput v-model="details.lastName" />
          </div>
        </div>
        <div class="cols">
          <div class="cols__label tinted">Email*</div>
          <div class="cols__field">
            <FormTextInput v-model="details.email" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.details {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card {
  padding: 24px;
  background-color: var(--color-grey-50);
  border-radius: 12px;
}

.cols {
  display: flex;
  align-items: center;

  &__label {
    flex-basis: 38%;
  }

  &__field {
    flex-basis: max-content;
    flex-grow: 1;
    flex-shrink: 0;
  }
}

.row {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
