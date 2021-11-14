<template>
  <button v-if="state === 'btn'" :type="type" :class="style">
    <slot></slot>
  </button>
  <router-link v-else :to="path" :class="style">
    <slot></slot>
  </router-link>
</template>

<script>
import { computed, toRefs } from "vue";
export default {
  props: {
    typ: {
      type: String,
    },
    styl: {
      type: String,
    },
    path: {
      type: Object,
    },
    state: {
      type: String,
    },
  },
  setup(props) {
    const data = toRefs(props);

    const path = computed(() => {
      return data?.path?.value ?? "";
    });

    const type = computed(() => {
      return data?.typ?.value ?? "";
    });
    const style = computed(() => {
      return data?.styl?.value ?? "";
    });
    const state = computed(() => {
      return data?.state?.value ?? "";
    });

    return { type, style, state, path };
  },
};
</script>

<style scoped lang="scss">
.flat {
  padding: 1rem 2rem;
  border-radius: 4px;
  background: var(--color-primary);
  color: white;
}

.outline {
  // border: 1px solid white !important;
  color: white;
}

.standard {
  color: black;
}
</style>
