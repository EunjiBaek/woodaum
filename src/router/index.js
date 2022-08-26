import { createRouter, createWebHistory } from "vue-router";
// import Home from "./Home.vue";
// import MenuPage from "./MenuPage.vue";
// import BrandStory from "./BrandStory";
// import Gift from "./Gift";
// import GiftSet from "./GiftSet";
// import StoreInfo from "./StoreInfo";
// import NotFound from "./NotFound";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./Home.vue"),
    },
    {
      path: "/menu/:name",
      name: "MenuPage",
      component: () => import("./MenuPage.vue"),
      props: true,
    },
    {
      path: "/gift/:name",
      name: "Gift",
      component: () => import("./Gift.vue"),
      props: true,
    },
    {
      path: "/gift/giftset/:id",
      name: "GiftSet",
      component: () => import("./GiftSet.vue"),
      props: true,
    },
    // 브랜드 스토리
    {
      path: "/brandstory",
      component: () => import("./BrandStory.vue"),
    },
    {
      path: "/store",
      name: "StoreInfo",
      component: () => import("./StoreInfo.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("./NotFound.vue"),
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
