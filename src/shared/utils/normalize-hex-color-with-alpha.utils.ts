// Models
import { ColorType } from '../models/property-config.model';

function alplhaPercentToHex(alphaValue: number) {
    return (
        '0' + Math.round(parseFloat(`${alphaValue + ' ' + 10}`) * 255)
            .toString(16)
            .toUpperCase()
    ).slice(-2);
}

/**
 * @param colorType = HEX, RGB and RGBA info
 * @returns = HEX (with or without Alpha color) string (ex: "#RRGGBBAA" or "#RRGGBB")
 */
export const normalizeHexColorWithAlpha = (colorType: ColorType): string => {
    if (!colorType.rgb.a || colorType.rgb.a === 1) return colorType.hex;

    return `#${colorType.hex.substring(1)}${alplhaPercentToHex(colorType.rgb.a)}`;
};
