// Models
import { FontSizePropertySyntax, VALUE_TYPE } from '../models/property-config.model';

interface UtilsPropertySyntax {
    fontSize: (data: FontSizePropertySyntax) => string;
}

export const utilsPropertySyntax: UtilsPropertySyntax = {
    fontSize: (data: FontSizePropertySyntax) => `font-size: ${data.valueType === VALUE_TYPE.FREE ? `${data.value}${data.measurementUnit}` : data.predefinedValue};`
};
