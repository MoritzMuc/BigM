import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetetctor from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import de from './locales/de.json';

i18n.use(languageDetetctor).use(initReactI18next).init({
    fallbackLng: 'en',
    debug: false,
    supportedLngs: ['en', 'de'],
    interpolation: {
        escapeValue: false, 
    },
    resources: {
        en: {
            translation: en,
        },
        de: {
            translation: de,
        },
    },
}); 