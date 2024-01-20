import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptbrTranslation from '../src/i18n/locales/ptbr.json';
import esTranslation from '../src/i18n/locales/es.json';

const resources = {
  ptbr: {
    translation: ptbrTranslation,
  },
  es: {
    translation: esTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ptbr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
