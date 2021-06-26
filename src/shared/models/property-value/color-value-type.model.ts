import { ColorType } from "../property-config.model";

export enum COLOR_VALUE_TYPE {
    HEXADECIMAL = 'hexadecimal',
    RGB = 'rgb'
}

export const colorValueTypeList = Object.values(COLOR_VALUE_TYPE);

export const defaultColorValue: ColorType = {
    hex: '#000000',
    rgb: {
        a: 1,
        r: 0,
        g: 0,
        b: 0
    }
}
