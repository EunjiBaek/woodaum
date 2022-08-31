import { createApp, createSSRApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import vmodal from "vue-js-modal";
import { i18n } from "@/locales/i18n";
import VueLazyload from "vue-lazyload";

createApp(App)
  .use(router)
  .use(i18n)
  .use(VueLazyload, {
    lazyComponent: true,
  })
  .mount("#app");
