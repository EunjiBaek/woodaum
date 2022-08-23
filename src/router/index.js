import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import MenuPage from "./MenuPage.vue";
import BrandStory from "./BrandStory";
import Gift from "./Gift";
import GiftSet from "./GiftSet";
import StoreInfo from "./StoreInfo";
import NotFound from "./NotFound";

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
      props: true,
    },
    {
      path: "/gift/:name",
      name: "Gift",
      component: Gift,
      props: true,
    },
    {
      path: "/gift/giftset/:id",
      name: "GiftSet",
      component: GiftSet,
      props: true,
    },
    // 브랜드 스토리
    {
      path: "/brandstory",
      component: BrandStory,
    },
    {
      path: "/store",
      name: "StoreInfo",
      component: StoreInfo,
    },
    {
      path: "/:pathMatch(.*)",
      component: NotFound,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
  mounted() {
    if (localStorage.currentlang) this.currentlang = localStorage.currentlang;
  },
});

export default router;
