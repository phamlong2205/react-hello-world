import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: "Welcome to Focus Bear!",
      description: "This app supports multiple languages."
    }
  },
  es: {
    translation: {
      welcome: "¡Bienvenido a Focus Bear!",
      description: "Esta aplicación admite varios idiomas."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
