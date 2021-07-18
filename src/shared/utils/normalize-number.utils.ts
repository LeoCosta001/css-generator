enum VALIDATION_RULE {
    FLOAT_NUMBER = 'floatNumber'
}

type ValidateWithRegExp = {
    [key in VALIDATION_RULE]: RegExp;
};

const validateWithRegExp: ValidateWithRegExp = {
    [VALIDATION_RULE.FLOAT_NUMBER]: /^(\d+)(\.?)(\d*)/
};

const normalizeString = (text: string, regex: RegExp): string => {
    const validCharacters: RegExpMatchArray | null = text.match(regex);
    return validCharacters ? validCharacters[0] : '';
};

export const filterField = {
    normalize: {
        floatNumber(text: string, removeFirstZero?: boolean): string {
            let result: string = normalizeString(text, validateWithRegExp[VALIDATION_RULE.FLOAT_NUMBER]);
            if (result && result.indexOf('.') !== 1 && removeFirstZero) result = result.replace(/^0+/, '');
            return result ? result : '0';
        }
    }
};
