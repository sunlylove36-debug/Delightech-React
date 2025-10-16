import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    ns: ["hero", "features", "navbar", "solution", "step", "team", "videos", "career", "news", "footer"], 
    defaultNS: "hero",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"]
    },
    react: { useSuspense: false },
    interpolation: { escapeValue: false }
  });

export default i18n;