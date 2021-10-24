<template>
  <main>
    <Header v-if="path !== '/home'"></Header>
    <router-view></router-view>
    <Footer v-if="path !== '/home'"></Footer>
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  components: {
    Footer,
    Header,
  },
  setup() {
    let route = useRoute();
    const path = computed(() => {
      return route.path;
    });
    return {
      path,
    };
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100&display=swap");

:root {
  --color-primary-light: #ea7a9a;
  --color-primary: #de3163;
  --color-primary-dark: #92173b;
}
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}
body {
  font-family: "Lato", sans-serif;
  font-size: 1.6rem;
  text-rendering: optimizeLegibility;
  max-width: 1420px;
  margin: 0 auto;
}
</style>
