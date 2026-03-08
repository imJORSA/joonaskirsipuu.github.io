import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import et from './locales/et.json';
import it from './locales/it.json';
import ja from './locales/ja.json';

if (!i18n.isInitialized) {
  const savedLang = typeof window !== 'undefined' 
    ? (sessionStorage.getItem('i18nextLng') || 'en')
    : 'en';

  i18n
    .use(initReactI18next)
    .init({
      resources: { en, it, ja },
      lng: savedLang,
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
    });
}

export default i18n;
