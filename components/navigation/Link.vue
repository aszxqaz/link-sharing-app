<template>
  <NuxtLink class="link"><slot></slot></NuxtLink>
</template>
<style scoped>
.link {
  color: var(--button-bg-color);
}

.link:hover {
  color: var(--button-bg-color-hover);
}
</style>
