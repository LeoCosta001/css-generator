// Utils
import { filterField } from './normalize-number.utils';

// Interfaces
export interface InputCheck {
    normalizedValue: any;
    errors: Record<string, string>;
}

export const inputCheck = {
    measurementUnitsValue(fieldName: string, inputValue: string, allowZeroValue?: boolean): InputCheck {
        let errors: Record<string, string> = {};
        inputValue = filterField.normalize.floatNumber(inputValue, true);

        if (!inputValue || isNaN(Number(inputValue))) errors[fieldName] = 'Valor inválido';
        if (allowZeroValue) {
            if (Number(inputValue) < 0) errors[fieldName] = 'Insira uma valor maior ou igual a 0';
        } else {
            if (inputValue === '0') errors[fieldName] = 'Insira uma valor maior que 0';
        }

        return {
            normalizedValue: inputValue,
            errors
        };
    }
};
