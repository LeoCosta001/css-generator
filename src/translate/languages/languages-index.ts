import { Resource } from 'i18next';
import { englishTranslation } from './en-us';
import { portugueseTranslation } from './pt-br';

const allTranslations: Resource = {
    ...englishTranslation,
    ...portugueseTranslation
};

export { allTranslations };
