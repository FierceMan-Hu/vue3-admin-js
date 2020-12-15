import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/account/login")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
