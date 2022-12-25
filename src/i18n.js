import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
const api_key = import.meta.env.VITE_I18NEXUS_API_KEY;
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${api_key}`;

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    ns: ["default"],
    defaultNS: "default",
    supportedLngs: ["en", "de"],
    backend: {
      loadPath: loadPath,
    },
  });
