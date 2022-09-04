import VueRouter, { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: (r) =>
        require.ensure([], () => r(require("./Home.vue")), "demo"),
      // component: () => import(/* webpackChunkName: "Home" */ "./Home.vue"),
    },
    {
      path: "/menu/:name",
      name: "MenuPage",
      component: () =>
        require.ensure([], () => r(require("./MenuPage.vue")), "demo"),
      // import(/* webpackChunkName: "MenuPage" */ "./MenuPage.vue"),
      props: true,
    },
    {
      path: "/gift/:name",
      name: "Gift",
      component: () =>
        require.ensure([], () => r(require("./Gift.vue")), "demo"),
      // import(/* webpackChunkName: "Gift" */ "./Gift.vue"),
      props: true,
    },
    {
      path: "/gift/giftset/:id",
      name: "GiftSet",
      component: () =>
        require.ensure([], () => r(require("./GiftSet.vue")), "demo"),
      // import(/* webpackChunkName: "GiftSet" */ "./GiftSet.vue"),
      props: true,
    },
    // 브랜드 스토리
    {
      path: "/brandstory",
      component: () =>
        require.ensure([], () => r(require("./BrandStory.vue")), "demo"),
      // import(/* webpackChunkName: "BrandStory" */ "./BrandStory.vue"),
    },
    {
      path: "/store",
      name: "StoreInfo",
      component: () =>
        require.ensure([], () => r(require("./StoreInfo.vue")), "demo"),
      // import(/* webpackChunkName: "StoreInfo" */ "./StoreInfo.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      component: () =>
        require.ensure([], () => r(require("./NotFound.vue")), "demo"),
      // import(/* webpackChunkName: "NotFound" */ "./NotFound.vue"),
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
