import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";
import App from "./App.vue";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    {
      name: "Home",
      path: "/home",
      component: () => import("./views/Home.vue"),
    },
  ],
});

const store = createStore({
  state() {
    return {};
  },
});

app.use(router);
app.use(store);
router.isReady().then(() => app.mount("#app"));
