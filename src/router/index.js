import { createRouter, createWebHistory } from "vue-router";
// import Home from "../pages/index.vue";
import MasterUsers from "../pages/master/users/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/index.vue"),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () => import("../views/About.vue"),
  // },
  {
    path: "/master/users",
    name: "Users",
    component: MasterUsers,
  },
  {
    path: "/master/users/:id",
    name: "UserId",
    component: () => import("../pages/master/users/_id/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
