import { useState, useEffect } from 'react';
// Components
import { PropertyConfigItem } from "../../property-config-menu/property-config-item/property-config-item.component";
import { PredefinedValuesFields } from '../../generic-input/predefined-values/predefined-values.component';
// Utils
import { utilsPropertySyntax } from '../../../utils/property-syntax.utils';
import { filterField } from '../../../utils/check-filter-field.utils';
// Models
import { FontStyleProperty } from '../../../models/property-config.model';
import { PROPERTY_NAME } from '../../../models/property-name.model';
import { globalValueList } from '../../../models/property-value/global-value.model';
import { keywordFontStyleValueList } from '../../../models/property-value/keyword-value.model';
// Material-ui
import {
    Divider,
    Grid
} from "@material-ui/core";

// Interfaces
interface FontStyleConfigProps {
    propertySettings: FontStyleProperty;
    updatePropertySettings: (propertyName: PROPERTY_NAME, newPropertySettings: FontStyleProperty) => void;
}

export const FontStyleConfig = (props: FontStyleConfigProps): JSX.Element => {
    const initialValues: FontStyleProperty = {
        valueType: props.propertySettings.valueType,
        predefinedValue: props.propertySettings.predefinedValue,
        syntax: props.propertySettings.syntax
    };

    // States
    const [formValue, setFormValue] = useState<FontStyleProperty>(initialValues);
    const [formError, setFormError] = useState<Record<string, string>>({});

    // Methods
    const updatePropertySettings = () => {
        props.updatePropertySettings(PROPERTY_NAME.FONT_STYLE, {
            ...formValue,
            syntax: utilsPropertySyntax.fontStyle(formValue)
        });
    };

    // Form
    const validateFields = (fieldName: string, value: any) => {
        let errors: Record<string, string> = {};

        // Input "value"
        if (fieldName === 'value') {
            value = filterField.normalize.floatNumber(value, true);

            if (!value || isNaN(Number(value))) errors[fieldName] = 'Valor inválido';
            if (value === '0') errors[fieldName] = 'Insira uma valor maior que 0';
        }

        // Show errors  
        setFormError(errors);

        // Update form values
        setFormValue({
            ...formValue,
            [fieldName]: value
        });
    };

    // Effects
    useEffect(() => {
        if (Object.keys(formError).length === 0) updatePropertySettings();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formValue])

    return (
        <form>
            <PropertyConfigItem title="Estilo">
                <Grid container spacing={1}>
                    <PredefinedValuesFields
                        predefinedValue={formValue.predefinedValue}
                        predefinedValueInputName="predefinedValue"
                        predefinedValueList={[
                            { title: true, list: ['Palavras-chave', ...keywordFontStyleValueList] },
                            { title: true, list: ['Globais', ...globalValueList, 'revert'] },
                        ]}
                        validateFields={validateFields}
                    />
                </Grid>
            </PropertyConfigItem>
            <Divider />
        </form>
    );
};
