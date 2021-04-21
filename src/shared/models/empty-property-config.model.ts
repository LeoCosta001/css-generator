// Models
import { MEASUREMENT_UNITS } from './property-value/measurement-units.model';
import { GLOBAL_VALUE } from './property-value/global-value.model';
import { COLOR_VALUE_TYPE } from './property-value/color-value-type.model';
import { PROPERTY_NAME } from './property-name.model';
import {
    ColorProperty,
    FontSizeProperty,
    FontFamilyProperty,
    FontStretchProperty,
    FontStyleProperty,
    FontVariantProperty,
    FontWeightProperty,
    LetterSpacingProperty,
    TextShadowProperty,
    WordSpacingProperty
} from './property-config.model';
// Utils
import { utilsPropertySyntax } from '../utils/property-syntax';

/*************************
 * Property config empty *
 *************************/

interface EmptyPropertyConfig {
    [PROPERTY_NAME.COLOR]: ColorProperty;
    [PROPERTY_NAME.FONT_SIZE]: FontSizeProperty;
    [PROPERTY_NAME.FONT_FAMILY]: FontFamilyProperty;
    [PROPERTY_NAME.FONT_STRETCH]: FontStretchProperty;
    [PROPERTY_NAME.FONT_STYLE]: FontStyleProperty;
    [PROPERTY_NAME.FONT_VARIANT]: FontVariantProperty;
    [PROPERTY_NAME.FONT_WEIGHT]: FontWeightProperty;
    [PROPERTY_NAME.LETTER_SPACING]: LetterSpacingProperty;
    [PROPERTY_NAME.TEXT_SHADOW]: TextShadowProperty;
    [PROPERTY_NAME.WORD_SPACING]: WordSpacingProperty;
}

export const getEmptyPropertyConfig: EmptyPropertyConfig = {
    [PROPERTY_NAME.COLOR]: {
        valueType: COLOR_VALUE_TYPE.HEXADECIMAL,
        value: '#000000',
        syntax: 'color: #000000;'
    },
    [PROPERTY_NAME.FONT_SIZE]: {
        valueType: MEASUREMENT_UNITS.POINT,
        value: 12,
        syntax: utilsPropertySyntax.fontSize({ value: 12, valueType: MEASUREMENT_UNITS.PIXEL })
    },
    [PROPERTY_NAME.FONT_FAMILY]: {
        value: ['Verdana', 'Arial', 'Helvetica', 'sans-serif'],
        syntax: 'font-family: Verdana, Arial, Helvetica, sans-serif;'
    },
    [PROPERTY_NAME.FONT_STRETCH]: {
        value: GLOBAL_VALUE.NORMAL,
        syntax: `${PROPERTY_NAME.FONT_STRETCH}: normal;`
    },
    [PROPERTY_NAME.FONT_STYLE]: {
        value: 'normal;',
        syntax: `${PROPERTY_NAME.FONT_STYLE}: normal;`
    },
    [PROPERTY_NAME.FONT_VARIANT]: {
        value: GLOBAL_VALUE.NORMAL,
        syntax: `${PROPERTY_NAME.FONT_VARIANT}: normal;`
    },
    [PROPERTY_NAME.FONT_WEIGHT]: {
        value: GLOBAL_VALUE.NORMAL,
        syntax: `${PROPERTY_NAME.FONT_WEIGHT}: normal;`
    },
    [PROPERTY_NAME.LETTER_SPACING]: {
        valueType: MEASUREMENT_UNITS.PIXEL,
        value: GLOBAL_VALUE.NORMAL,
        syntax: `${PROPERTY_NAME.LETTER_SPACING}: normal;`
    },
    [PROPERTY_NAME.TEXT_SHADOW]: {
        value: [
            {
                positionX: { value: 2, valueType: MEASUREMENT_UNITS.PIXEL },
                positionY: { value: 2, valueType: MEASUREMENT_UNITS.PIXEL },
                blurRadius: { value: 2, valueType: MEASUREMENT_UNITS.PIXEL },
                color: {
                    valueType: COLOR_VALUE_TYPE.HEXADECIMAL,
                    value: '#d3d3d3'
                }
            }
        ],
        syntax: `${PROPERTY_NAME.TEXT_SHADOW}: 2px 2px 2px #d3d3d3;`
    },
    [PROPERTY_NAME.WORD_SPACING]: {
        valueType: MEASUREMENT_UNITS.PIXEL,
        value: GLOBAL_VALUE.NORMAL,
        syntax: `${PROPERTY_NAME.LETTER_SPACING}: normal;`
    }
};
