import { createRouter, createWebHashHistory } from "vue-router";
import { useSonglistStore } from "@/stores/songlist";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      redirect: {
        name: "loading",
      },
    },
    {
      path: "/loading",
      name: "loading",
      component: () => import("../views/LoadingView.vue"),
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

router.beforeEach((to, from, next) => {
  if (to.name !== "loading" && !checkSonglist()) {
    console.log("路由守卫：没载入到歌单");
    next({ name: "loading" });
  } else {
    next();
  }
});

function checkSonglist() {
  const store = useSonglistStore();
  if (store.originSonglist.length > 0) {
    return true;
  } else {
    return false;
  }
}

export default router;
