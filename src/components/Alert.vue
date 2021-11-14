<template>
  <div :class="state">
    {{ message }}
  </div>
</template>
<script>
import { computed, toRefs } from "vue";
export default {
  props: {
    state: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  setup(props) {
    const data = toRefs(props);
    const state = computed(() => {
      return data.state.value;
    });
    const message = computed(() => {
      return data.message.value;
    });
    return {
      state,
      message,
    };
  },
};
</script>
<style lang="scss" scoped>
.success,
.error {
  position: fixed;
  left: 50%;
  top: 0;
  z-index: 99999;
  width: 30rem;
  height: 10rem;
  color: white;
  transform: translateX(-50%) !important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.success {
  background-color: green;
}
.error {
  background-color: red;
}

.v-enter-to {
  transform: translateY(0);
}
.v-enter-active {
  transition: all 3s;
}
.v-enter-from {
  transform: translateY(-10px);
}
</style>
