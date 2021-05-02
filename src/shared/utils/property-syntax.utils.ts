// Models
import { FontSizePropertySyntax, VALUE_TYPE } from '../models/property-config.model';

interface UtilsPropertySyntax {
    fontSize: (data: FontSizePropertySyntax) => string;
}

export const utilsPropertySyntax: UtilsPropertySyntax = {
    fontSize: (data: FontSizePropertySyntax) => {
        return `font-size: ${
            data.valueType === VALUE_TYPE.FREE
            ? `${parseFloat(data.value)}${data.measurementUnit}`
            : data.predefinedValue
        };`
    }
};
