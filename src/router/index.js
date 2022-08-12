import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import MenuPage from "./MenuPage.vue";
import BrandStory from "./BrandStory";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/menu/:name",
      name: "MenuPage",
      component: MenuPage,
    },
    // 브랜드 스토리
    {
      path: "/brandstory",
      component: BrandStory,
    },
  ],
});

export default router;
