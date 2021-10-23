<template>
  <main>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Footer,
    Header,
  },
  setup() {},
};
</script>
<style></style>
