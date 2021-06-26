import { ColorTypeRGB } from '../models/property-config.model';

/**
 * @param rgb = RGB or RGBA info
 * @returns = RGB or RGBA string (ex: "rgb(255, 255, 255)")
 */
export const rgbColorToString = (rgb: ColorTypeRGB): string => {
    if (!rgb.a || rgb.a === 1) {
        return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    } else {
        return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;
    }
};
