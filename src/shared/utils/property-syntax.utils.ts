// Models
import {
    FontSizePropertySyntax,
    FontStretchPropertySyntax,
    VALUE_TYPE
} from '../models/property-config.model';

interface UtilsPropertySyntax {
    fontSize: (data: FontSizePropertySyntax) => string;
    fontStretch: (data: FontStretchPropertySyntax) => string;
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
    }
};
