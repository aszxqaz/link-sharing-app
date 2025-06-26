<script setup lang="ts">
defineProps<{
  prefixIcon?: Object;
  label?: string;
  error?: string;
  hint?: string;
}>();

const text = defineModel<string>();

const id = useId();
</script>

<template>
  <div>
    <label
      class="input-label xs"
      :class="{ invalid: error }"
      v-if="label"
      :for="id"
    >
      {{ label }}
    </label>
    <div class="wrapper input-decoration" :class="{ invalid: error }">
      <div v-if="prefixIcon" class="input-prefix">
        <component :is="prefixIcon" />
      </div>
      <input
        :id="id"
        v-bind="$attrs"
        v-model="text"
        class="wrapper__input input-field"
        :class="{ invalid: error }"
        :type="$attrs['type'] as string ?? 'text'"
      />
      <div v-if="error" class="wrapper__error xs">
        {{ error }}
      </div>
    </div>
    <div v-if="error" class="error xs">
      {{ error }}
    </div>
    <TypoTextTinted class="hint" v-else-if="hint" size="sm">
      {{ hint }}
    </TypoTextTinted>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/css/form";

.wrapper {
  display: flex;

  &__error {
    display: none;
    @media screen and (min-width: 768px) {
      display: grid;
      place-items: center;
      padding-right: 16px;
      color: var(--color-red-500);
      pointer-events: none;
    }
  }
}

.error {
  margin-top: 8px;
  text-align: end;
  color: var(--color-red-500);
  pointer-events: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
}

.hint {
  margin-top: 8px;
}
</style>
