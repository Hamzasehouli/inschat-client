import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import store from "./store/index.js";

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

app.use(router);
app.use(store);
router.isReady().then(() => app.mount("#app"));
