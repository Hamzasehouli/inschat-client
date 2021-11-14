<template>
  <main>
    <Header v-if="path !== '/login' && path !== '/signup'"></Header>
    <router-view></router-view>
    <Footer v-if="path !== '/login' && path !== '/signup'"></Footer>
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
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
  font-size: 1.6rem;
  text-rendering: optimizeLegibility;
  max-width: 1420px;
  margin: 0 auto;
}

a,
input,
button {
  font-size: inherit;
}

button,
input {
  outline: none;
  border: none;
}

button {
  cursor: pointer;
  background: transparent;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}
.main-page {
  min-height: 100vh;
  background: rgb(238, 238, 238);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
