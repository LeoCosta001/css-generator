// Models
import {
    VALUE_TYPE,
    FontSizePropertySyntax,
    FontStretchPropertySyntax,
    LetterSpacingPropertySyntax,
    WordSpacingPropertySyntax,
    FontWeightPropertySyntax
} from '../models/property-config.model';

interface UtilsPropertySyntax {
    fontSize: (data: FontSizePropertySyntax) => string;
    fontStretch: (data: FontStretchPropertySyntax) => string;
    fontWeight: (data: FontWeightPropertySyntax) => string;
    letterSpacing: (data: LetterSpacingPropertySyntax) => string;
    wordSpacing: (data: WordSpacingPropertySyntax) => string;
}

export const utilsPropertySyntax: UtilsPropertySyntax = {
    fontSize: (data: FontSizePropertySyntax) => {
        return `font-size: ${
            data.valueType === VALUE_TYPE.FREE
            ? `${parseFloat(data.value)}${data.measurementUnit}`
            : data.predefinedValue
        };`
    },

    fontStretch: (data: FontStretchPropertySyntax) => {
        return `font-stretch: ${
            data.valueType === VALUE_TYPE.FREE
            ? `${parseFloat(data.value)}${data.measurementUnit}`
            : data.predefinedValue
        };`
    },

    fontWeight: (data: FontWeightPropertySyntax) => {
        return `font-weight ${data.predefinedValue};`;
    },

    letterSpacing: (data: LetterSpacingPropertySyntax) => {
        return `letter-spacing: ${
            data.valueType === VALUE_TYPE.FREE
            ? `${parseFloat(data.value)}${data.measurementUnit}`
            : data.predefinedValue
        };`
    },

    wordSpacing: (data: WordSpacingPropertySyntax) => {
        return `word-spacing: ${
            data.valueType === VALUE_TYPE.FREE
            ? `${parseFloat(data.value)}${data.measurementUnit}`
            : data.predefinedValue
        };`
    }
};
