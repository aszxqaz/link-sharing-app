<script setup lang="ts" generic="T">
const props = defineProps<{
  label: string;
  placeholderIcon: Object;
  placeholder: string;
  error?: string;
  hint?: string;
  items: { value: T; label: string; icon: Object }[];
}>();

const value = defineModel<T>();

const expanded = ref(false);

const id = useId();

const selectedItem = computed(
  () => value.value && props.items.find((i) => i.value == value.value)
);

const label = computed(() => selectedItem.value?.label ?? props.placeholder);

const prefixIcon = computed(
  () => selectedItem.value?.icon ?? props.placeholderIcon
);

function select(val: T) {
  value.value = val;
  expanded.value = false;
}

const onClickOutside = ref(function (ev: MouseEvent) {
  if (ev.target instanceof HTMLElement && !ev.target.closest(`#${id}`)) {
    expanded.value = false;
  }
});

onMounted(() => document.body.addEventListener("click", onClickOutside.value));
onUnmounted(() =>
  document.body.removeEventListener("click", onClickOutside.value)
);
</script>

<template>
  <div>
    <label
      class="input-label xs"
      :class="{ invalid: error }"
      v-if="props.label"
      :for="id">
      {{ props.label }}
    </label>
    <div :id="id" class="relarea">
      <div @click="expanded = !expanded" class="dropdown input-decoration">
        <div class="input-prefix">
          <component :is="prefixIcon" />
        </div>
        <div class="dropdown__field input-field">
          {{ label }}
        </div>
        <div
          class="dropdown__suffix input-suffix"
          :class="{ rotated: expanded }">
          <IconChevronDown />
        </div>
      </div>
      <ul v-if="expanded" class="list input-decoration">
        <li
          v-for="item in items"
          :key="item.label"
          @click="select(item.value)"
          class="list__item"
          :class="{ 'color-active': item.value == value }">
          <div
            class="input-prefix"
            :class="{ 'color-active': item.value == value }">
            <component :is="item.icon" />
          </div>
          <div class="input-field">
            {{ item.label }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/css/form";

.relarea {
  position: relative;
}

.dropdown {
  display: flex;
  cursor: pointer;

  &__field {
    pointer-events: none;
  }

  &__suffix {
    color: var(--color-purple-600);
  }
}

.list {
  position: absolute;
  z-index: 999;
  top: calc(100% + 8px);
  width: 100%;

  &__item {
    position: relative;
    display: flex;
    cursor: pointer;

    &:not(:last-child)::after {
      position: absolute;
      bottom: 0;
      left: 16px;
      right: 16px;
      content: "";
      height: 1px;
      background-color: var(--color-grey-200);
    }

    &:hover {
      @extend .hover;

      &::after {
        display: none;
      }
    }
  }
}

.rotated {
  transform: rotateX(180deg);
}
</style>
