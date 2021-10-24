import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    {
      name: "Home",
      path: "/home",
      component: () => import("../views/Home.vue"),
    },
    {
      name: "Signup",
      path: "/signup",
      component: () => import("../views/Signup.vue"),
    },
  ],
});
