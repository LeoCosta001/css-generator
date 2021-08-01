// Models
import { MEASUREMENT_UNITS, MEASUREMENT_UNITS_WITHOUT_PERCENT } from './property-value/measurement-units.model';
import { COLOR_VALUE_TYPE, defaultColorValue } from './property-value/color-value-type.model';
import { PROPERTY_NAME } from './property-name.model';
import { GLOBAL_VALUE } from './property-value/global-value.model';
import {
    KEYWORD_COLOR_VALUE,
    KEYWORD_FONT_STRETCH_VALUE,
    KEYWORD_FONT_STYLE_VALUE,
    KEYWORD_FONT_VARIANT_VALUE,
    KEYWORD_FONT_WEIGHT_VALUE,
    KEYWORD_LETTER_SPACING_VALUE,
    KEYWORD_WORD_SPACING_VALUE
} from './property-value/keyword-value.model';
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

/******************
 * Empty property *
 ******************/

export const colorEmpty: Omit<ColorProperty, 'syntax'> = {
    measurementUnit: COLOR_VALUE_TYPE.HEXADECIMAL,
    value: defaultColorValue,
    predefinedValue: KEYWORD_COLOR_VALUE.BLACK,
    valueType: VALUE_TYPE.FREE
};

export const fontSizeEmpty: Omit<FontSizeProperty, 'syntax'> = {
    measurementUnit: MEASUREMENT_UNITS.POINT,
    value: '12',
    predefinedValue: GLOBAL_VALUE.INITIAL,
    valueType: VALUE_TYPE.FREE
};

export const fontFamilyEmpty: Omit<FontFamilyProperty, 'syntax'> = {
    value: ['Verdana', 'Arial', 'Helvetica', 'sans-serif']
};

export const fontStretchEmpty: Omit<FontStretchProperty, 'syntax'> = {
    measurementUnit: MEASUREMENT_UNITS.PERCENT,
    value: '100',
    predefinedValue: KEYWORD_FONT_STRETCH_VALUE.NORMAL,
    valueType: VALUE_TYPE.FREE
};

export const fontStyleEmpty: Omit<FontStyleProperty, 'syntax'> = {
    predefinedValue: KEYWORD_FONT_STYLE_VALUE.NORMAL,
    valueType: VALUE_TYPE.PREDEFINED
};

export const fontVariantEmpty: Omit<FontVariantProperty, 'syntax'> = {
    predefinedValue: KEYWORD_FONT_VARIANT_VALUE.NORMAL,
    valueType: VALUE_TYPE.PREDEFINED
};

export const fontWeightEmpty: Omit<FontWeightProperty, 'syntax'> = {
    predefinedValue: KEYWORD_FONT_WEIGHT_VALUE.NORMAL,
    valueType: VALUE_TYPE.PREDEFINED
};

export const letterSpacingEmpty: Omit<LetterSpacingProperty, 'syntax'> = {
    measurementUnit: MEASUREMENT_UNITS_WITHOUT_PERCENT.PIXEL,
    value: '1',
    predefinedValue: KEYWORD_LETTER_SPACING_VALUE.NORMAL,
    valueType: VALUE_TYPE.PREDEFINED
};

export const textShadowEmpty: Omit<TextShadowProperty, 'syntax'> = {
    value: [
        {
            positionX: { value: '2', measurementUnit: MEASUREMENT_UNITS_WITHOUT_PERCENT.PIXEL },
            positionY: { value: '2', measurementUnit: MEASUREMENT_UNITS_WITHOUT_PERCENT.PIXEL },
            blurRadius: { value: '2', measurementUnit: MEASUREMENT_UNITS_WITHOUT_PERCENT.PIXEL },
            color: {
                measurementUnit: COLOR_VALUE_TYPE.HEXADECIMAL,
                value: defaultColorValue,
                predefinedValue: KEYWORD_COLOR_VALUE.BLACK,
                valueType: VALUE_TYPE.FREE
            }
        }
    ]
};

export const wordSpacingEmpty = {
    measurementUnit: MEASUREMENT_UNITS_WITHOUT_PERCENT.PIXEL,
    value: '5',
    predefinedValue: KEYWORD_WORD_SPACING_VALUE.NORMAL,
    valueType: VALUE_TYPE.PREDEFINED
};

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
        ...colorEmpty,
        syntax: utilsPropertySyntax.color({ ...colorEmpty })
    },
    [PROPERTY_NAME.FONT_SIZE]: {
        ...fontSizeEmpty,
        syntax: utilsPropertySyntax.fontSize({ ...fontSizeEmpty })
    },
    [PROPERTY_NAME.FONT_FAMILY]: {
        ...fontFamilyEmpty,
        syntax: `${PROPERTY_NAME.FONT_FAMILY}: Verdana, Arial, Helvetica, sans-serif;`
    },
    [PROPERTY_NAME.FONT_STRETCH]: {
        ...fontStretchEmpty,
        syntax: utilsPropertySyntax.fontStretch({ ...fontStretchEmpty })
    },
    [PROPERTY_NAME.FONT_STYLE]: {
        ...fontStyleEmpty,
        syntax: utilsPropertySyntax.fontStyle({ ...fontStyleEmpty })
    },
    [PROPERTY_NAME.FONT_VARIANT]: {
        ...fontVariantEmpty,
        syntax: utilsPropertySyntax.fontVariant({ ...fontVariantEmpty })
    },
    [PROPERTY_NAME.FONT_WEIGHT]: {
        ...fontWeightEmpty,
        syntax: utilsPropertySyntax.fontWeight({ ...fontWeightEmpty })
    },
    [PROPERTY_NAME.LETTER_SPACING]: {
       ...letterSpacingEmpty,
        syntax: utilsPropertySyntax.letterSpacing({ ...letterSpacingEmpty })
    },
    [PROPERTY_NAME.TEXT_SHADOW]: {
        ...textShadowEmpty,
        syntax: utilsPropertySyntax.textShadow({ ...textShadowEmpty })
    },
    [PROPERTY_NAME.WORD_SPACING]: {
        ...wordSpacingEmpty,
        syntax: utilsPropertySyntax.wordSpacing({ ...wordSpacingEmpty })
    }
};
