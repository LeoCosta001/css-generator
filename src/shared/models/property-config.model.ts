// Models
import { MEASUREMENT_UNITS } from "./measurement-units.model";
import { COLOR_VALUE_TYPE } from "./color-value-type.model";

export interface ColorProperty {
    valueType: COLOR_VALUE_TYPE;
    value: string;
}

export interface FontSizeProperty {
    valueType: MEASUREMENT_UNITS;
    value: number;
    syntax: string;
}

export interface FontFamilyProperty {
    value: string[];
    syntax: string;
}

export interface FontStretchProperty {
    value: string;
    syntax: string;
}

export interface FontStyleProperty {
    value: string;
    syntax: string;
}

export interface FontVariantProperty {
    value: string;
    syntax: string;
}

export interface FontWeightProperty {
    value: number;
    syntax: string;
}

export interface LetterSpacingProperty {
    valueType: MEASUREMENT_UNITS;
    value: number;
    syntax: string;
}

export interface TextShadowProperty {
    valueType: MEASUREMENT_UNITS;
    value: number;
    syntax: string;
}

export interface WordSpacingProperty {
    valueType: MEASUREMENT_UNITS;
    value: number;
    syntax: string;
}
