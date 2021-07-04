// Utils
import { rgbColorToString } from './rgb-color-to-string.utils';
// Models
import {
    VALUE_TYPE,
    ColorPropertySyntax,
    FontSizePropertySyntax,
    FontStretchPropertySyntax,
    FontWeightPropertySyntax,
    LetterSpacingPropertySyntax,
    WordSpacingPropertySyntax,
    FontStylePropertySyntax,
    TextShadowPropertySyntax,
    ColorValue,
    TextShadowValue
} from '../models/property-config.model';
import { COLOR_VALUE_TYPE } from '../models/property-value/color-value-type.model';

interface UtilsPropertySyntax {
    color: (data: ColorPropertySyntax) => string;
    fontSize: (data: FontSizePropertySyntax) => string;
    fontStretch: (data: FontStretchPropertySyntax) => string;
    fontWeight: (data: FontWeightPropertySyntax) => string;
    fontStyle: (data: FontStylePropertySyntax) => string;
    textShadow: (data: TextShadowPropertySyntax) => string;
    letterSpacing: (data: LetterSpacingPropertySyntax) => string;
    wordSpacing: (data: WordSpacingPropertySyntax) => string;
}

export const utilsPropertySyntax: UtilsPropertySyntax = {
    color: (data: ColorPropertySyntax) => {
        let colorSyntax: string = '';

        if ((data.valueType === VALUE_TYPE.FREE && data.measurementUnit === COLOR_VALUE_TYPE.HEXADECIMAL) || data.valueType === VALUE_TYPE.PREDEFINED) {
            colorSyntax = `${data.valueType === VALUE_TYPE.FREE ? data.value.hex : data.predefinedValue}`;
        }

        if (data.valueType === VALUE_TYPE.FREE && data.measurementUnit === COLOR_VALUE_TYPE.RGB) {
            colorSyntax = rgbColorToString(data.value.rgb);
        }

        return `color: ${colorSyntax};`;
    },

    fontSize: (data: FontSizePropertySyntax) => {
        return `font-size: ${data.valueType === VALUE_TYPE.FREE ? `${parseFloat(data.value)}${data.measurementUnit}` : data.predefinedValue};`;
    },

    fontStretch: (data: FontStretchPropertySyntax) => {
        return `font-stretch: ${data.valueType === VALUE_TYPE.FREE ? `${parseFloat(data.value)}${data.measurementUnit}` : data.predefinedValue};`;
    },

    fontWeight: (data: FontWeightPropertySyntax) => {
        return `font-weight: ${data.predefinedValue};`;
    },

    fontStyle: (data: FontStylePropertySyntax) => {
        return `font-style: ${data.predefinedValue};`;
    },

    letterSpacing: (data: LetterSpacingPropertySyntax) => {
        return `letter-spacing: ${data.valueType === VALUE_TYPE.FREE ? `${parseFloat(data.value)}${data.measurementUnit}` : data.predefinedValue};`;
    },

    textShadow: (data: TextShadowPropertySyntax) => {
        let textShadowSyntax: string = '';

        data.value.forEach((textShadowValue: TextShadowValue, index: number) => {
            const positionX = `${parseFloat(textShadowValue.positionX.value)}${textShadowValue.positionX.measurementUnit}`;
            const positionY = `${parseFloat(textShadowValue.positionY.value)}${textShadowValue.positionY.measurementUnit}`;
            const blurRadius = `${parseFloat(textShadowValue.blurRadius.value)}${textShadowValue.blurRadius.measurementUnit}`;

            let textShadowValueSyntax = `${positionX} ${positionY} ${blurRadius} `;
            
            if ((textShadowValue.color.valueType === VALUE_TYPE.FREE && textShadowValue.color.measurementUnit === COLOR_VALUE_TYPE.HEXADECIMAL) || textShadowValue.color.valueType === VALUE_TYPE.PREDEFINED) {
                textShadowValueSyntax += `${textShadowValue.color.valueType === VALUE_TYPE.FREE ? textShadowValue.color.value.hex : textShadowValue.color.predefinedValue}`;
            }

            if (textShadowValue.color.valueType === VALUE_TYPE.FREE && textShadowValue.color.measurementUnit === COLOR_VALUE_TYPE.RGB) {
                textShadowValueSyntax += rgbColorToString(textShadowValue.color.value.rgb);
            }

            textShadowSyntax += `${textShadowValueSyntax}${data.value.length <= index + 1 ? '' : ', '}`;
        });

        return `text-shadow: ${textShadowSyntax};`;
    },

    wordSpacing: (data: WordSpacingPropertySyntax) => {
        return `word-spacing: ${data.valueType === VALUE_TYPE.FREE ? `${parseFloat(data.value)}${data.measurementUnit}` : data.predefinedValue};`;
    }
};
