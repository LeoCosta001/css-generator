export const normalizeString = {
    caseConvert: {
        /**
         * @param text = "font-size" or "font_size"
         * @returns = "fontSize"
         */
        snakeToCamel(text: string): string {
            return text.replace(/([-_]\w)/g, group => group[1].toUpperCase());
        }
    }
};
