import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// Initialize i18n
i18n
  .use(HttpApi) // Load translations using Http backend
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    supportedLngs: ['en', 'ar'], // Supported languages
    fallbackLng: 'en', // Fallback language if detection fails
    debug: true, // Turn off in production
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'], // Cache the language in cookies
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Translation files path
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
