import { getLocales } from "expo-localization";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import cs from "@/lang/cs.json";
import en from "@/lang/en.json";

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: getLocales()[0].languageCode || "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: en,
    },
    cs: {
      translation: cs,
    },
  },
});

export default i18next;
