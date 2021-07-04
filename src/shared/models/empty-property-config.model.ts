// Models
import { MEASUREMENT_UNITS, MEASUREMENT_UNITS_WITHOUT_PERCENT } from './property-value/measurement-units.model';
import { COLOR_VALUE_TYPE, defaultColorValue } from './property-value/color-value-type.model';
import { PROPERTY_NAME } from './property-name.model';
import { GLOBAL_VALUE } from './property-value/global-value.model';
import {
    KEYWORD_COLOR_VALUE,
    KEYWORD_FONT_STRETCH_VALUE,
    KEYWORD_FONT_STYLE_VALUE,
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

const color: Omit<ColorProperty, 'syntax'> = {
    measurementUnit: COLOR_VALUE_TYPE.HEXADECIMAL,
    value: defaultColorValue,
    predefinedValue: KEYWORD_COLOR_VALUE.BLACK,
    valueType: VALUE_TYPE.FREE
};

const fontSize: Omit<FontSizeProperty, 'syntax'> = {
    measurementUnit: MEASUREMENT_UNITS.POINT,
    value: '12',
    predefinedValue: GLOBAL_VALUE.INITIAL,
    valueType: VALUE_TYPE.FREE
};

const fontFamily: Omit<FontFamilyProperty, 'syntax'> = {
    value: ['Verdana', 'Arial', 'Helvetica', 'sans-serif']
};

const fontStretch: Omit<FontStretchProperty, 'syntax'> = {
    measurementUnit: MEASUREMENT_UNITS.PERCENT,
    value: '100',
    predefinedValue: KEYWORD_FONT_STRETCH_VALUE.NORMAL,
    valueType: VALUE_TYPE.FREE
};

const fontStyle: Omit<FontStyleProperty, 'syntax'> = {
    predefinedValue: KEYWORD_FONT_STYLE_VALUE.NORMAL,
    valueType: VALUE_TYPE.PREDEFINED
};

const fontVariant: Omit<FontVariantProperty, 'syntax'> = {
    value: GLOBAL_VALUE.INITIAL
};

const fontWeight: Omit<FontWeightProperty, 'syntax'> = {
    predefinedValue: KEYWORD_FONT_WEIGHT_VALUE.NORMAL,
    valueType: VALUE_TYPE.PREDEFINED
};

const letterSpacing: Omit<LetterSpacingProperty, 'syntax'> = {
    measurementUnit: MEASUREMENT_UNITS_WITHOUT_PERCENT.PIXEL,
    value: '1',
    predefinedValue: KEYWORD_LETTER_SPACING_VALUE.NORMAL,
    valueType: VALUE_TYPE.PREDEFINED
};

const textShadow: Omit<TextShadowProperty, 'syntax'> = {
    value: [
        {
            positionX: { value: '2', measurementUnit: MEASUREMENT_UNITS.PIXEL },
            positionY: { value: '2', measurementUnit: MEASUREMENT_UNITS.PIXEL },
            blurRadius: { value: '2', measurementUnit: MEASUREMENT_UNITS.PIXEL },
            color: {
                measurementUnit: COLOR_VALUE_TYPE.HEXADECIMAL,
                value: defaultColorValue,
                predefinedValue: KEYWORD_COLOR_VALUE.BLACK,
                valueType: VALUE_TYPE.FREE
            }
        }
    ]
};

const wordSpacing = {
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
        ...color,
        syntax: utilsPropertySyntax.color({ ...color })
    },
    [PROPERTY_NAME.FONT_SIZE]: {
        ...fontSize,
        syntax: utilsPropertySyntax.fontSize({ ...fontSize })
    },
    [PROPERTY_NAME.FONT_FAMILY]: {
        ...fontFamily,
        syntax: `${PROPERTY_NAME.FONT_FAMILY}: Verdana, Arial, Helvetica, sans-serif;`
    },
    [PROPERTY_NAME.FONT_STRETCH]: {
        ...fontStretch,
        syntax: utilsPropertySyntax.fontStretch({ ...fontStretch })
    },
    [PROPERTY_NAME.FONT_STYLE]: {
        ...fontStyle,
        syntax: utilsPropertySyntax.fontStyle({ ...fontStyle })
    },
    [PROPERTY_NAME.FONT_VARIANT]: {
        ...fontVariant,
        syntax: `${PROPERTY_NAME.FONT_VARIANT}: initial;`
    },
    [PROPERTY_NAME.FONT_WEIGHT]: {
        ...fontWeight,
        syntax: utilsPropertySyntax.fontWeight({ ...fontWeight })
    },
    [PROPERTY_NAME.LETTER_SPACING]: {
       ...letterSpacing,
        syntax: utilsPropertySyntax.letterSpacing({ ...letterSpacing })
    },
    [PROPERTY_NAME.TEXT_SHADOW]: {
        ...textShadow,
        syntax: utilsPropertySyntax.textShadow({ ...textShadow })
    },
    [PROPERTY_NAME.WORD_SPACING]: {
        ...wordSpacing,
        syntax: utilsPropertySyntax.wordSpacing({ ...wordSpacing })
    }
};
