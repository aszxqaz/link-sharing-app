<script setup lang="ts">
export type SnackbarState = {
  shown: boolean;
  message: string;
};

const state = useState("snackbar", () => ({
  shown: false,
  message: "",
}));

watch(
  () => state.value.shown,
  (newShown) => {
    if (newShown) {
      setTimeout(() => {
        state.value.shown = false;
      }, 2000);
    }
  }
);
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div v-if="state.shown" class="snackbar md-semibold">
        {{ state.message }}
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.snackbar {
  position: fixed;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  padding: 16px 24px;
  background-color: var(--color-grey-900);
  color: var(--color-grey-50);
  border-radius: 12px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.15s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
