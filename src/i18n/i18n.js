import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "./locales/ru/ru.json";
import en from "./locales/en/en.json";

const currentLanguage = localStorage.getItem("i18nextLng") || "ru";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
  },
  lng: currentLanguage,
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("i18nextLng", lng);
});

export default i18n; // Ensure this export is present
