<script setup lang="ts">
import { platforms } from "~/shared/schema/platform";
</script>

<template>
  <div class="buttons">
    <PreviewButton
      v-for="platform in platforms"
      :link="{
        platform,
        url: 'google.com',
      }" />
  </div>
</template>

<style lang="scss" scoped>
.buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 240px;
}
</style>
