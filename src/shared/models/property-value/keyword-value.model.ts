// font-stretch
export enum KEYWORD_FONT_STRETCH_VALUE {
    ULTRA_CONDENSED = 'ultra-condensed',
    EXTRA_CONDENSED = 'extra-condensed',
    CONDENSED = 'condensed',
    SEMI_CONDENSED = 'semi-condensed',
    NORMAL = 'normal',
    SEMI_EXPANDED = 'semi-expanded',
    EXPANDED = 'expanded',
    EXTRA_EXPANDED = 'extra-expanded',
    ULTRA_EXPANDED = 'ultra-expanded'
}

export const keywordFontStretchValueList = Object.values(KEYWORD_FONT_STRETCH_VALUE);

// letter-spacing
export enum KEYWORD_LETTER_SPACING_VALUE {
    NORMAL = 'normal'
}

export const keywordLetterSpacingValueList = Object.values(KEYWORD_LETTER_SPACING_VALUE);

// word-spacing
export enum KEYWORD_WORD_SPACING_VALUE {
    NORMAL = 'normal'
}

export const keywordWordSpacingValueList = Object.values(KEYWORD_WORD_SPACING_VALUE);
