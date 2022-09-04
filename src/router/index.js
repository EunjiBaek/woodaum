import VueRouter, { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import(/* webpackChunkName: "Home" */ "./Home.vue"),
    },
    {
      path: "/menu/:name",
      name: "MenuPage",
      component: () =>
        import(/* webpackChunkName: "MenuPage" */ "./MenuPage.vue"),
      props: true,
    },
    {
      path: "/gift/:name",
      name: "Gift",
      component: () => import(/* webpackChunkName: "Gift" */ "./Gift.vue"),
      props: true,
    },
    {
      path: "/gift/giftset/:id",
      name: "GiftSet",
      component: () =>
        import(/* webpackChunkName: "GiftSet" */ "./GiftSet.vue"),
      props: true,
    },
    // 브랜드 스토리
    {
      path: "/brandstory",
      component: () =>
        import(/* webpackChunkName: "BrandStory" */ "./BrandStory.vue"),
    },
    {
      path: "/store",
      name: "StoreInfo",
      component: () =>
        import(/* webpackChunkName: "StoreInfo" */ "./StoreInfo.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      component: () =>
        import(/* webpackChunkName: "NotFound" */ "./NotFound.vue"),
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
