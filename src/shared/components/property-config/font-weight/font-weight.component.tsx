import { useState, useEffect } from 'react';
// Components
import { PropertyConfigItem } from "../../property-config-menu/property-config-item/property-config-item.component";
import { PredefinedValuesFields } from '../../generic-input/predefined-values/predefined-values.component';
// Utils
import { utilsPropertySyntax } from '../../../utils/property-syntax.utils';
import { InputCheck, inputCheck } from '../../../utils/input-check.utils';
// Models
import { FontWeightProperty } from '../../../models/property-config.model';
import { PROPERTY_NAME } from '../../../models/property-name.model';
import { globalValueList } from '../../../models/property-value/global-value.model';
import { keywordFontWeightValueList } from '../../../models/property-value/keyword-value.model';
import { relativeFontWeightValueList } from '../../../models/property-value/relative-size.model';
// Material-ui
import {
    Divider,
    Grid
} from "@material-ui/core";

// Interfaces
interface FontWeightConfigProps {
    propertySettings: FontWeightProperty;
    updatePropertySettings: (propertyName: PROPERTY_NAME, newPropertySettings: FontWeightProperty) => void;
}

export const FontWeightConfig = (props: FontWeightConfigProps): JSX.Element => {
    const initialValues: FontWeightProperty = {
        valueType: props.propertySettings.valueType,
        predefinedValue: props.propertySettings.predefinedValue,
        syntax: props.propertySettings.syntax
    };

    // States
    const [formValue, setFormValue] = useState<FontWeightProperty>(initialValues);
    const [formError, setFormError] = useState<Record<string, string>>({});

    // Methods
    const updatePropertySettings = () => {
        props.updatePropertySettings(PROPERTY_NAME.FONT_WEIGHT, {
            ...formValue,
            syntax: utilsPropertySyntax.fontWeight(formValue)
        });
    };

    // Form
    const validateFields = (fieldName: string, value: any) => {
        // Check errors  
        let errors: Record<string, string> = {};

        if (fieldName === 'value') {
            const getInputCheck: InputCheck = inputCheck.measurementUnitsValue(fieldName, value)
            errors = getInputCheck.errors;
            value = getInputCheck.normalizedValue;
        }

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
            <PropertyConfigItem title="Alongamento">
                <Grid container spacing={1}>
                    <PredefinedValuesFields
                        predefinedValue={formValue.predefinedValue}
                        predefinedValueInputName="predefinedValue"
                        predefinedValueList={[
                            { title: true, list: ['Palavras-chave', ...keywordFontWeightValueList] },
                            { title: true, list: ['Relativos', ...relativeFontWeightValueList] },
                            { title: true, list: ['Globais', ...globalValueList] },
                        ]}
                        validateFields={validateFields}
                    />
                </Grid>
            </PropertyConfigItem>
            <Divider />
        </form>
    );
};
