// Utils
import { normalizeString } from './normalize-string.utils';

/**
 * @param cssStringToObject = "font-size: 12pt;" or "font_size: 12pt;"
 * @returns = { fontSize: "12pt" }
 */
export const cssStringToObject = (cssSyntax: string): Record<string, string> => {
    let [key, value]: string[] = cssSyntax.split(':');
    if (key && value) {
        key = key.trim();
        value = value.trim().replace(';', '');

        return { [normalizeString.caseConvert.snakeToCamel(key)]: value };
    }

    return {};
};
