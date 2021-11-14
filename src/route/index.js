import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";
// import { useStore } from "vuex";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Main",
      path: "/",
      beforeEnter: (to, from, next) => {
        if (store.getters["user/getIsLoggedin"]) {
          next({ name: "Home" });
        } else {
          next({ name: "Login" });
        }
      },
      component: () => import("../views/Main.vue"),
    },
    {
      name: "Profile",
      path: "/profile",
      beforeEnter: (to, from, next) => {
        if (store.getters["user/getIsLoggedin"]) {
          next();
        } else {
          next({ name: "Login" });
        }
      },
      component: () => import("../views/Profile.vue"),
    },
    {
      name: "Signup",
      path: "/signup",
      beforeEnter: (to, from, next) => {
        if (store.getters["user/getIsLoggedin"]) {
          next({ name: "Home" });
        } else {
          next();
        }
      },
      component: () => import("../components/Signup.vue"),
    },
    {
      name: "Login",
      path: "/login",
      beforeEnter: (to, from, next) => {
        if (store.getters["user/getIsLoggedin"]) {
          next({ name: "Home" });
        } else {
          next();
        }
      },
      component: () => import("../components/Login.vue"),
    },
    {
      name: "Home",
      path: "/home",
      beforeEnter: (to, from, next) => {
        if (store.getters["user/getIsLoggedin"]) {
          next();
        } else {
          next({ name: "Login" });
        }
      },
      component: () => import("../views/Home.vue"),
    },
    {
      name: "Error",
      path: "/:catchError(.*)",
      component: () => import("../views/Error.vue"),
    },
  ],
});
