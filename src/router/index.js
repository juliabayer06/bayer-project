import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ComidaViews from "../views/ComidaViews.vue";
import PrecoViews from "../views/PrecoViews.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/comida",
      name: "comida",
      component: comidaView,
    },
    {
      path: "/preco",
      name: "preco",
      component: precoView,
    },
  ],
});

export default router;
