import { useState, useEffect } from 'react';
// Components
import { PropertyConfigItem } from "../../property-config-menu/property-config-item/property-config-item.component";
import { ValueTypeButtonGroup } from '../../value-type-button-group/value-type-button-group.component';
import { MeasurementUnitsFields } from '../../generic-input/measurement-units/measurement-units.component';
import { PredefinedValuesFields } from '../../generic-input/predefined-values/predefined-values.component';
// Utils
import { utilsPropertySyntax } from '../../../utils/property-syntax.utils';
import { InputCheck, inputCheck } from '../../../utils/input-check.utils';
// Models
import { FontStretchProperty, VALUE_TYPE } from '../../../models/property-config.model';
import { PROPERTY_NAME } from '../../../models/property-name.model';
import { measurementUnitsList } from '../../../models/property-value/measurement-units.model';
import { globalValueList } from '../../../models/property-value/global-value.model';
import { keywordFontStretchValueList } from '../../../models/property-value/keyword-value.model';
// Material-ui
import {
    Divider,
    Grid
} from "@material-ui/core";

// Interfaces
interface FontStretchConfigProps {
    propertySettings: FontStretchProperty;
    updatePropertySettings: (propertyName: PROPERTY_NAME, newPropertySettings: FontStretchProperty) => void;
}

export const FontStretchConfig = (props: FontStretchConfigProps): JSX.Element => {
    const initialValues: FontStretchProperty = {
        value: props.propertySettings.value,
        valueType: props.propertySettings.valueType,
        measurementUnit: props.propertySettings.measurementUnit,
        predefinedValue: props.propertySettings.predefinedValue,
        syntax: props.propertySettings.syntax
    };

    // States
    const [currentValueTab, setCurrentValueTab] = useState<VALUE_TYPE>(initialValues.valueType);
    const [formValue, setFormValue] = useState<FontStretchProperty>(initialValues);
    const [formError, setFormError] = useState<Record<string, string>>({});

    // Methods
    const updatePropertySettings = () => {
        props.updatePropertySettings(PROPERTY_NAME.FONT_STRETCH, {
            ...formValue,
            syntax: utilsPropertySyntax.fontStretch(formValue)
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

    useEffect(() => {
        setCurrentValueTab(props.propertySettings.valueType)
        setFormValue(initialValues)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.propertySettings.syntax])

    return (
        <form>
            <PropertyConfigItem title="Alongamento">
                <>
                    <ValueTypeButtonGroup
                        currentValueTab={currentValueTab}
                        valueTypeName="valueType"
                        validateFields={validateFields}
                        setCurrentValueTab={setCurrentValueTab}
                    />

                    {/* Free values */}
                    {currentValueTab === VALUE_TYPE.FREE && (
                        <Grid container spacing={1}>
                            <MeasurementUnitsFields
                                value={formValue.value}
                                valueError={Boolean(formError.value)}
                                valueInputName="value"
                                measurementUnit={formValue.measurementUnit}
                                measurementUnitInputName="measurementUnit"
                                measurementUnitsList={measurementUnitsList}
                                validateFields={validateFields}
                            />
                        </Grid>
                    )}

                    {/* Predefined values */}
                    {currentValueTab === VALUE_TYPE.PREDEFINED && (
                        <Grid container spacing={1}>
                            <PredefinedValuesFields
                                predefinedValue={formValue.predefinedValue}
                                predefinedValueInputName="predefinedValue"
                                predefinedValueList={[
                                    { title: true, list: ['Palavras-chave', ...keywordFontStretchValueList] },
                                    { title: true, list: ['Globais', ...globalValueList] },
                                ]}
                                validateFields={validateFields}
                            />
                        </Grid>
                    )}
                </>
            </PropertyConfigItem>
            <Divider />
        </form>
    );
};
