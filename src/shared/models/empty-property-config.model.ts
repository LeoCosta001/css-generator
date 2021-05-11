// Models
import { MEASUREMENT_UNITS, MEASUREMENT_UNITS_WITHOUT_PERCENT } from './property-value/measurement-units.model';
import { GLOBAL_VALUE } from './property-value/global-value.model';
import { KEYWORD_FONT_STRETCH_VALUE, KEYWORD_LETTER_SPACING_VALUE, KEYWORD_WORD_SPACING_VALUE } from './property-value/keyword-value.model';
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
    WordSpacingProperty,
    VALUE_TYPE
} from './property-config.model';
// Utils
import { utilsPropertySyntax } from '../utils/property-syntax.utils';

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
        measurementUnit: MEASUREMENT_UNITS.POINT,
        value: '12',
        predefinedValue: GLOBAL_VALUE.INITIAL,
        valueType: VALUE_TYPE.FREE,
        syntax: utilsPropertySyntax.fontSize({
            value: '12',
            measurementUnit: MEASUREMENT_UNITS.POINT,
            predefinedValue: GLOBAL_VALUE.INITIAL,
            valueType: VALUE_TYPE.FREE
        })
    },
    [PROPERTY_NAME.FONT_FAMILY]: {
        value: ['Verdana', 'Arial', 'Helvetica', 'sans-serif'],
        syntax: 'font-family: Verdana, Arial, Helvetica, sans-serif;'
    },
    [PROPERTY_NAME.FONT_STRETCH]: {
        measurementUnit: MEASUREMENT_UNITS.PERCENT,
        value: '100',
        predefinedValue: KEYWORD_FONT_STRETCH_VALUE.NORMAL,
        valueType: VALUE_TYPE.FREE,
        syntax: utilsPropertySyntax.fontStretch({
            value: '100',
            measurementUnit: MEASUREMENT_UNITS.PERCENT,
            predefinedValue: KEYWORD_FONT_STRETCH_VALUE.NORMAL,
            valueType: VALUE_TYPE.FREE
        })
    },
    [PROPERTY_NAME.FONT_STYLE]: {
        value: 'normal;',
        syntax: `${PROPERTY_NAME.FONT_STYLE}: initial;`
    },
    [PROPERTY_NAME.FONT_VARIANT]: {
        value: GLOBAL_VALUE.INITIAL,
        syntax: `${PROPERTY_NAME.FONT_VARIANT}: initial;`
    },
    [PROPERTY_NAME.FONT_WEIGHT]: {
        value: GLOBAL_VALUE.INITIAL,
        syntax: `${PROPERTY_NAME.FONT_WEIGHT}: initial;`
    },
    [PROPERTY_NAME.LETTER_SPACING]: {
        measurementUnit: MEASUREMENT_UNITS_WITHOUT_PERCENT.PIXEL,
        value: '1',
        predefinedValue: KEYWORD_LETTER_SPACING_VALUE.NORMAL,
        valueType: VALUE_TYPE.PREDEFINED,
        syntax: utilsPropertySyntax.letterSpacing({
            value: '1',
            measurementUnit: MEASUREMENT_UNITS_WITHOUT_PERCENT.PIXEL,
            predefinedValue: KEYWORD_LETTER_SPACING_VALUE.NORMAL,
            valueType: VALUE_TYPE.PREDEFINED
        })
    },
    [PROPERTY_NAME.TEXT_SHADOW]: {
        value: [
            {
                positionX: { value: '2', measurementUnit: MEASUREMENT_UNITS.PIXEL },
                positionY: { value: '2', measurementUnit: MEASUREMENT_UNITS.PIXEL },
                blurRadius: { value: '2', measurementUnit: MEASUREMENT_UNITS.PIXEL },
                color: {
                    valueType: COLOR_VALUE_TYPE.HEXADECIMAL,
                    value: '#d3d3d3'
                }
            }
        ],
        syntax: `${PROPERTY_NAME.TEXT_SHADOW}: 2px 2px 2px #d3d3d3;`
    },
    [PROPERTY_NAME.WORD_SPACING]: {
        measurementUnit: MEASUREMENT_UNITS_WITHOUT_PERCENT.PIXEL,
        value: '5',
        predefinedValue: KEYWORD_WORD_SPACING_VALUE.NORMAL,
        valueType: VALUE_TYPE.PREDEFINED,
        syntax: utilsPropertySyntax.wordSpacing({
            value: '5',
            measurementUnit: MEASUREMENT_UNITS_WITHOUT_PERCENT.PIXEL,
            predefinedValue: KEYWORD_WORD_SPACING_VALUE.NORMAL,
            valueType: VALUE_TYPE.PREDEFINED
        })
    }
};
