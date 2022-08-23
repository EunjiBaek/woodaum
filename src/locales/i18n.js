import { createI18n } from "vue-i18n";
import ko from "./ko.json";
import en from "./en.json";

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("currentlang") || "ko",
  fallbackLocale: "ko",
  messages: {
    ko: ko,
    en: en,
  },
});
