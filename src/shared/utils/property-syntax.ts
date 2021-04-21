// Models
import { FontSizePropertySyntax } from '../models/property-config.model';

interface UtilsPropertySyntax {
    fontSize: (data: FontSizePropertySyntax) => string;
}

export const utilsPropertySyntax: UtilsPropertySyntax = {
    fontSize: (data: FontSizePropertySyntax) => `font-size: ${data.value}${data.valueType};`
};
