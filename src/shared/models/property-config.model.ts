// Models
import { MEASUREMENT_UNITS } from './property-value/measurement-units.model';
import { GLOBAL_VALUE } from './property-value/global-value.model';
import { COLOR_VALUE_TYPE } from './property-value/color-value-type.model';
import { ABSOLUTE_SIZE } from './property-value/absolute-size.model';
import { RELATIVE_SIZE } from './property-value/relative-size.model';

/**************************
 * Property config simple *
 **************************/

export interface SimpleColorValue {
    valueType: COLOR_VALUE_TYPE | null;
    value: string;
}

export interface SimpleNumberValue {
    measurementUnit: MEASUREMENT_UNITS;
    value: number;
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
    | WordSpacingProperty
    | ColorPropertySyntax;

/*************************
 * Property config model *
 *************************/

// color
export interface ColorProperty extends SimpleColorValue {
    syntax: string;
}

export type ColorPropertySyntax = Omit<ColorProperty, 'syntax'>;

// font-size
export interface FontSizeProperty {
    measurementUnit: MEASUREMENT_UNITS;
    value: number;
    predefinedValue: GLOBAL_VALUE | RELATIVE_SIZE | ABSOLUTE_SIZE;
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
    value: string;
    syntax: string;
}

// font-style
export interface FontStyleProperty {
    value: string;
    syntax: string;
}

// font-variant
export interface FontVariantProperty {
    value: string;
    syntax: string;
}

// font-weight
export enum FONT_WEIGHT_VALUE {
    BOLD = 'bold',
    LIGHTER = 'lighter',
    BOLDER = 'bolder',
    WEIGHT_100 = 100,
    WEIGHT_200 = 200,
    WEIGHT_300 = 300,
    WEIGHT_400 = 400,
    WEIGHT_500 = 500,
    WEIGHT_600 = 600,
    WEIGHT_700 = 700,
    WEIGHT_800 = 800,
    WEIGHT_900 = 900
}

export interface FontWeightProperty {
    value: FONT_WEIGHT_VALUE | GLOBAL_VALUE;
    syntax: string;
}

// letter-spacing
export interface LetterSpacingProperty extends SimpleNumberValue {
    measurementUnit: MEASUREMENT_UNITS;
    value: number;
    predefinedValue: GLOBAL_VALUE;
    syntax: string;
}

// text-shadow
export interface TextShadowValue {
    positionX: SimpleNumberValue;
    positionY: SimpleNumberValue;
    blurRadius: SimpleNumberValue | null;
    color: SimpleColorValue | null;
}
export interface TextShadowProperty {
    value: TextShadowValue[];
    syntax: string;
}

// word-spacing
export interface WordSpacingProperty {
    measurementUnit: MEASUREMENT_UNITS;
    value: number;
    predefinedValue: GLOBAL_VALUE;
    syntax: string;
}
