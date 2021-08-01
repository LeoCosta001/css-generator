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

// font-weight
export enum KEYWORD_FONT_WEIGHT_VALUE {
    NORMAL = 'normal',
    BOLD = 'bold'
}

export const keywordFontWeightValueList = Object.values(KEYWORD_FONT_WEIGHT_VALUE);

// font-style
export enum KEYWORD_FONT_STYLE_VALUE {
    NORMAL = 'normal',
    ITALIC = 'italic',
    OBLIQUE = 'oblique'
}

export const keywordFontStyleValueList = Object.values(KEYWORD_FONT_STYLE_VALUE);

// font-variant
export enum KEYWORD_FONT_VARIANT_VALUE {
    NORMAL = 'normal',
    SMALL_CAPS = 'small-caps'
}

export const keywordFontVariantValueList = Object.values(KEYWORD_FONT_VARIANT_VALUE);

// color
export enum KEYWORD_COLOR_VALUE {
    ALICE_BLUE = 'aliceblue',
    ANTIQUE_WHITE = 'antiquewhite',
    AQUA = 'aqua',
    AQUAMARINE = 'aquamarine',
    AZURE = 'azure',
    BEIGE = 'beige',
    BISQUE = 'bisque',
    BLACK = 'black',
    BLANCHED_ALMOND = 'blanchedalmond',
    BLUE = 'blue',
    BLUE_VIOLET = 'blueviolet',
    BROWN = 'brown',
    BURLY_WOOD = 'burlywood',
    CADET_BLUE = 'cadetblue',
    CHARTREUSE = 'chartreuse',
    CHOCOLATE = 'chocolate',
    CORAL = 'coral',
    CORNFLOWER_BLUE = 'cornflowerblue',
    CORNSILK = 'cornsilk',
    CRIMSON = 'crimson',
    CYAN = 'cyan',
    DARK_BLUE = 'darkblue',
    DARK_CYAN = 'darkcyan',
    DARK_GOLDEN_ROD = 'darkgoldenrod',
    DARK_GRAY = 'darkgray',
    DARK_GREY = 'darkgrey',
    DARK_GREEN = 'darkgreen',
    DARK_KHAKI = 'darkkhaki',
    DARK_MAGENTA = 'darkmagenta',
    DARK_OLIVE_GREEN = 'darkolivegreen',
    DARK_ORANGE = 'darkorange',
    DARK_ORCHID = 'darkorchid',
    DARK_RED = 'darkred',
    DARK_SALMON = 'darksalmon',
    DARK_SEA_GREEN = 'darkseagreen',
    DARK_SLATE_BLUE = 'darkslateblue',
    DARK_SLATE_GRAY = 'darkslategray',
    DARK_SLATE_GREY = 'darkslategrey',
    DARK_TURQUOISE = 'darkturquoise',
    DARK_VIOLET = 'darkviolet',
    DEEP_PINK = 'deeppink',
    DEEP_SKY_BLUE = 'deepskyblue',
    DIM_GRAY = 'dimgray',
    DIM_GREY = 'dimgrey',
    DODGER_BLUE = 'dodgerblue',
    FIRE_BRICK = 'firebrick',
    FLORAL_WHITE = 'floralwhite',
    FOREST_GREEN = 'forestgreen',
    FUCHSIA = 'fuchsia',
    GAINSBORO = 'gainsboro',
    GHOST_WHITE = 'ghostwhite',
    GOLD = 'gold',
    GOLDEN_ROD = 'goldenrod',
    GRAY = 'gray',
    GREY = 'grey',
    GREEN = 'green',
    GREEN_YELLOW = 'greenyellow',
    HONEY_DEW = 'honeydew',
    HOT_PINK = 'hotpink',
    INDIAN_RED = 'indianred' ,
    INDIGO = 'indigo' ,
    IVORY = 'ivory',
    KHAKI = 'khaki',
    LAVENDER = 'lavender',
    LAVENDER_BLUSH = 'lavenderblush',
    LAWN_GREEN = 'lawngreen',
    LEMON_CHIFFON = 'lemonchiffon',
    LIGHT_BLUE = 'lightblue',
    LIGHT_CORAL = 'lightcoral',
    LIGHT_CYAN = 'lightcyan',
    LIGHT_GOLDEN_ROD_YELLOW = 'lightgoldenrodyellow',
    LIGHT_GRAY = 'lightgray',
    LIGHT_GREY = 'lightgrey',
    LIGHT_GREEN = 'lightgreen',
    LIGHT_PINK = 'lightpink',
    LIGHT_SALMON = 'lightsalmon',
    LIGHT_SEA_GREEN = 'lightseagreen',
    LIGHT_SKY_BLUE = 'lightskyblue',
    LIGHT_SLATE_GRAY = 'lightslategray',
    LIGHT_SLATE_GREY = 'lightslategrey',
    LIGHT_STEEL_BLUE = 'lightsteelblue',
    LIGHT_YELLOW = 'lightyellow',
    LIME = 'lime',
    LIME_GREEN = 'limegreen',
    LINEN = 'linen',
    MAGENTA = 'magenta',
    MAROON = 'maroon',
    MEDIUM_AQUA_MARINE = 'mediumaquamarine',
    MEDIUM_BLUE = 'mediumblue',
    MEDIUM_ORCHID = 'mediumorchid',
    MEDIUM_PURPLE = 'mediumpurple',
    MEDIUM_SEA_GREEN = 'mediumseagreen',
    MEDIUM_SLATE_BLUE = 'mediumslateblue',
    MEDIUM_SPRING_GREEN = 'mediumspringgreen',
    MEDIUM_TURQUOISE = 'mediumturquoise',
    MEDIUM_VIOLET_RED = 'mediumvioletred',
    MIDNIGHT_BLUE = 'midnightblue',
    MINT_CREAM = 'mintcream',
    MISTY_ROSE = 'mistyrose',
    MOCCASIN = 'moccasin',
    NAVAJO_WHITE = 'navajowhite',
    NAVY = 'navy',
    OLD_LACE = 'oldlace',
    OLIVE = 'olive',
    OLIVE_DRAB = 'olivedrab',
    ORANGE = 'orange',
    ORANGE_RED = 'orangered',
    ORCHID = 'orchid',
    PALE_GOLDEN_ROD = 'palegoldenrod',
    PALE_GREEN = 'palegreen',
    PALE_TURQUOISE = 'paleturquoise',
    PALE_VIOLET_RED = 'palevioletred',
    PAPAYA_WHIP = 'papayawhip',
    PEACH_PUFF = 'peachpuff',
    PERU = 'peru',
    PINK = 'pink',
    PLUM = 'plum',
    POWDER_BLUE = 'powderblue',
    PURPLE = 'purple',
    RED = 'red',
    ROSY_BROWN = 'rosybrown',
    ROYAL_BLUE = 'royalblue',
    SADDLE_BROWN = 'saddlebrown',
    SALMON = 'salmon',
    SANDY_BROWN = 'sandybrown',
    SEA_GREEN = 'seagreen',
    SEA_SHELL = 'seashell',
    SIENNA = 'sienna',
    SILVER = 'silver',
    SKY_BLUE = 'skyblue',
    SLATE_BLUE = 'slateblue',
    SLATE_GRAY = 'slategray',
    SLATE_GREY = 'slategrey',
    SNOW = 'snow',
    SPRING_GREEN = 'springgreen',
    STEEL_BLUE = 'steelblue',
    TAN = 'tan',
    TEAL = 'teal',
    THISTLE = 'thistle',
    TOMATO = 'tomato',
    TURQUOISE = 'turquoise',
    VIOLET = 'violet',
    WHEAT = 'wheat',
    WHITE = 'white',
    WHITE_SMOKE = 'whitesmoke',
    YELLOW = 'yellow',
    YELLOW_GREEN = 'yellowgreen'
}

export const keywordColorValueList = Object.values(KEYWORD_COLOR_VALUE);
