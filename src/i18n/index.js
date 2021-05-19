import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import ES from "./translations/es";
import EN from "./translations/en";

const resources = {
  en: EN,
  es: ES,
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },

    react: {
      wait: true,
    },
  });

export default i18n;
