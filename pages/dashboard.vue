<script setup lang="ts">
import {
  PlatformGithub,
  PlatformFacebook,
  PlatformLinkedin,
} from "#components";

const items = [
  {
    label: "Github",
    prefixIcon: PlatformGithub,
    value: "Github",
  },
  {
    label: "Facebook",
    prefixIcon: PlatformFacebook,
    value: "Facebook",
  },
  {
    label: "Linkedin",
    prefixIcon: PlatformLinkedin,
    value: "Linkedin",
  },
];

const value = ref<string>("Github");
</script>

<template>
  <AppCustomizeLinks :links="[]" />
</template>

<style lang="scss" scoped></style>
