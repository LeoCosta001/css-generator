import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Languages
import { allTranslations } from './languages/languages-index';

i18n.use(LanguageDetector).init({
    debug: false,
    defaultNS: 'translations',
    fallbackLng: 'en',
    ns: ['translations'],
    resources: allTranslations
});

export { i18n };
