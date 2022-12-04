import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      redirect: {
        name: "roll",
      },
    },
    {
      path: "/roll",
      component: () => import("../views/RollView.vue"),
      redirect: { name: "roll" },
      children: [
        {
          path: "",
          name: "roll",
          component: () => import("../views/Roll/RollIndexView.vue"),
        },
        {
          path: "setting",
          name: "rollSetting",
          component: () => import("../views/Roll/RollSettingView.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
