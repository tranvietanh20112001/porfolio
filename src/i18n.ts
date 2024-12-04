import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      experiment: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
  },
  vn: {
    translation: {
      home: "Trang chủ",
      about: "Giới thiệu",
      experiment: "Kinh nghiệm",
      projects: "Dự án",
      contact: "Liên hệ",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", 
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;