import { Action } from 'redux';
// Models
import { PROPERTY_NAME } from '../property-name.model';
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
} from '../property-config.model';

// Reducer
export interface TextAppPropertySettings {
    [PROPERTY_NAME.COLOR]?: ColorProperty | null;
    [PROPERTY_NAME.FONT_SIZE]?: FontSizeProperty | null;
    [PROPERTY_NAME.FONT_FAMILY]?: FontFamilyProperty | null;
    [PROPERTY_NAME.FONT_STRETCH]?: FontStretchProperty | null;
    [PROPERTY_NAME.FONT_STYLE]?: FontStyleProperty | null;
    [PROPERTY_NAME.FONT_VARIANT]?: FontVariantProperty | null;
    [PROPERTY_NAME.FONT_WEIGHT]?: FontWeightProperty | null;
    [PROPERTY_NAME.LETTER_SPACING]?: LetterSpacingProperty | null;
    [PROPERTY_NAME.TEXT_SHADOW]?: TextShadowProperty | null;
    [PROPERTY_NAME.WORD_SPACING]?: WordSpacingProperty | null;
}

export interface TextAppProperty {
    name: string;
    property: PROPERTY_NAME;
    isActive: boolean;
    propertySettings: TextAppPropertySettings;
}

export interface TextAppPropertyState {
    selected: TextAppProperty | null;
    list: TextAppProperty[];
}

// Action
export interface ToggleAppPropertyAction extends Action {
    type: 'TOGGLE_APP_PROPERTY';
    propertyName: string;
}
