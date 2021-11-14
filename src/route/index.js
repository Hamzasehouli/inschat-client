import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Main",
      path: "/",
      component: () => import("../views/Main.vue"),
    },
    {
      name: "Signup",
      path: "/signup",
      component: () => import("../components/Signup.vue"),
    },
    {
      name: "Home",
      path: "/home",
      beforeEnter: (to, from, next) => {
        console.log(to, "to");
        console.log(from, "from");
        next();
      },
      component: () => import("../views/Home.vue"),
    },
  ],
});
