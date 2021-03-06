export enum MEASUREMENT_UNITS {
    PERCENT = '%',
    CHARACTER = 'ch',
    CENTIMETER = 'cm',
    RELATIVE_EM = 'em',
    RELATIVE_EX = 'ex',
    INCH = 'in',
    MILLIMETER = 'mm',
    PICA = 'pc',
    POINT = 'pt',
    PIXEL = 'px',
    RELATIVE_REM = 'rem',
    VIEWPORT_HEIGHT = 'vh',
    VIEWPORT_MIN = 'vmin',
    VIEWPORT_MAX = 'vmax',
    VIEWPORT_WIDTH = 'vw'
}

export const measurementUnitsList = Object.values(MEASUREMENT_UNITS);

export enum MEASUREMENT_UNITS_WITHOUT_PERCENT {
    CHARACTER = 'ch',
    CENTIMETER = 'cm',
    RELATIVE_EM = 'em',
    RELATIVE_EX = 'ex',
    INCH = 'in',
    MILLIMETER = 'mm',
    PICA = 'pc',
    POINT = 'pt',
    PIXEL = 'px',
    RELATIVE_REM = 'rem',
    VIEWPORT_HEIGHT = 'vh',
    VIEWPORT_MIN = 'vmin',
    VIEWPORT_MAX = 'vmax',
    VIEWPORT_WIDTH = 'vw'
}

export const measurementUnitsWithoutPercentList = Object.values(MEASUREMENT_UNITS_WITHOUT_PERCENT);
