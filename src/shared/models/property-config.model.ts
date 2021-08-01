// Models
import { MEASUREMENT_UNITS, MEASUREMENT_UNITS_WITHOUT_PERCENT } from './property-value/measurement-units.model';
import { GLOBAL_VALUE } from './property-value/global-value.model';
import { COLOR_VALUE_TYPE } from './property-value/color-value-type.model';
import { ABSOLUTE_SIZE } from './property-value/absolute-size.model';
import { RELATIVE_FONT_SIZE_VALUE, RELATIVE_FONT_WEIGHT_VALUE } from './property-value/relative-size.model';
import {
    KEYWORD_COLOR_VALUE,
    KEYWORD_FONT_STRETCH_VALUE,
    KEYWORD_FONT_STYLE_VALUE,
    KEYWORD_FONT_VARIANT_VALUE,
    KEYWORD_FONT_WEIGHT_VALUE,
    KEYWORD_LETTER_SPACING_VALUE,
    KEYWORD_WORD_SPACING_VALUE
} from './property-value/keyword-value.model';

/**************************
 * Property config simple *
 **************************/

export interface SimpleNumberValue {
    measurementUnit: MEASUREMENT_UNITS;
    value: string;
}

export interface ColorTypeRGB {
    a?: number;
    b: number;
    g: number;
    r: number;
}

export interface ColorType {
    hex: string;
    rgb: ColorTypeRGB;
}

export enum VALUE_TYPE {
    FREE,
    PREDEFINED
}

/************************
 * Property config list *
 ************************/

export type AllPropertySettings =
    | ColorProperty
    | FontSizeProperty
    | FontFamilyProperty
    | FontStretchProperty
    | FontStyleProperty
    | FontVariantProperty
    | FontWeightProperty
    | LetterSpacingProperty
    | TextShadowProperty
    | WordSpacingProperty;

/*************************
 * Property config model *
 *************************/

// color
export interface ColorValue {
    measurementUnit: COLOR_VALUE_TYPE,
    value: ColorType;
    predefinedValue: GLOBAL_VALUE | KEYWORD_COLOR_VALUE;
    valueType: VALUE_TYPE;
}

export interface ColorProperty extends ColorValue {
    syntax: string;
}

export type ColorPropertySyntax = Omit<ColorProperty, 'syntax'>;

// font-size
export interface FontSizeProperty {
    measurementUnit: MEASUREMENT_UNITS;
    value: string;
    predefinedValue: GLOBAL_VALUE | RELATIVE_FONT_SIZE_VALUE | ABSOLUTE_SIZE;
    valueType: VALUE_TYPE;
    syntax: string;
}

export type FontSizePropertySyntax = Omit<FontSizeProperty, 'syntax'>;

// font-family
export interface FontFamilyProperty {
    value: string[];
    syntax: string;
}

// font-stretch
export interface FontStretchProperty {
    measurementUnit: MEASUREMENT_UNITS.PERCENT;
    value: string;
    predefinedValue: GLOBAL_VALUE | KEYWORD_FONT_STRETCH_VALUE;
    valueType: VALUE_TYPE;
    syntax: string;
}

export type FontStretchPropertySyntax = Omit<FontStretchProperty, 'syntax'>;

// font-style
export interface FontStyleProperty {
    predefinedValue: GLOBAL_VALUE | KEYWORD_FONT_STYLE_VALUE;
    valueType: VALUE_TYPE.PREDEFINED;
    syntax: string;
}

export type FontStylePropertySyntax = Omit<FontStyleProperty, 'syntax'>;

// font-variant
export interface FontVariantProperty {
    predefinedValue: GLOBAL_VALUE | KEYWORD_FONT_VARIANT_VALUE;
    valueType: VALUE_TYPE.PREDEFINED;
    syntax: string;
}

export type FontVariantPropertySyntax = Omit<FontVariantProperty, 'syntax'>;

// font-weight
export interface FontWeightProperty {
    predefinedValue: GLOBAL_VALUE | KEYWORD_FONT_WEIGHT_VALUE | RELATIVE_FONT_WEIGHT_VALUE;
    valueType: VALUE_TYPE.PREDEFINED;
    syntax: string;
}

export type FontWeightPropertySyntax = Omit<FontWeightProperty, 'syntax'>;

// letter-spacing
export interface LetterSpacingProperty {
    measurementUnit: MEASUREMENT_UNITS_WITHOUT_PERCENT;
    value: string;
    predefinedValue: GLOBAL_VALUE | KEYWORD_LETTER_SPACING_VALUE;
    valueType: VALUE_TYPE;
    syntax: string;
}

export type LetterSpacingPropertySyntax = Omit<LetterSpacingProperty, 'syntax'>;

// text-shadow
export interface TextShadowPositionValue {
    measurementUnit: MEASUREMENT_UNITS_WITHOUT_PERCENT;
    value: string;
}

export interface TextShadowValue {
    positionX: TextShadowPositionValue;
    positionY: TextShadowPositionValue;
    blurRadius: TextShadowPositionValue;
    color: ColorValue;
}

export interface TextShadowProperty {
    value: TextShadowValue[];
    syntax: string;
}

export type TextShadowPropertySyntax = Omit<TextShadowProperty, 'syntax'>;

// word-spacing
export interface WordSpacingProperty {
    measurementUnit: MEASUREMENT_UNITS_WITHOUT_PERCENT;
    value: string;
    predefinedValue: GLOBAL_VALUE | KEYWORD_WORD_SPACING_VALUE;
    valueType: VALUE_TYPE;
    syntax: string;
}

export type WordSpacingPropertySyntax = Omit<WordSpacingProperty, 'syntax'>;
