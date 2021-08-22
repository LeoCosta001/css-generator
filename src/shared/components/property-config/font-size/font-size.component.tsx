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
import { FontSizeProperty, VALUE_TYPE } from '../../../models/property-config.model';
import { PROPERTY_NAME } from '../../../models/property-name.model';
import { measurementUnitsList } from '../../../models/property-value/measurement-units.model';
import { absoluteSizeList } from '../../../models/property-value/absolute-size.model';
import { relativeFontSizeList } from '../../../models/property-value/relative-size.model';
import { globalValueList } from '../../../models/property-value/global-value.model';
// Material-ui
import {
    Divider,
    Grid,
} from "@material-ui/core";

// Interfaces
interface FontSizeConfigProps {
    propertySettings: FontSizeProperty;
    updatePropertySettings: (propertyName: PROPERTY_NAME, newPropertySettings: FontSizeProperty) => void;
}

export const FontSizeConfig = (props: FontSizeConfigProps): JSX.Element => {
    const initialValues: FontSizeProperty = {
        value: props.propertySettings.value,
        valueType: props.propertySettings.valueType,
        measurementUnit: props.propertySettings.measurementUnit,
        predefinedValue: props.propertySettings.predefinedValue,
        syntax: props.propertySettings.syntax
    };

    // States
    const [currentValueTab, setCurrentValueTab] = useState<VALUE_TYPE>(initialValues.valueType);
    const [formValue, setFormValue] = useState<FontSizeProperty>(initialValues);
    const [formError, setFormError] = useState<Record<string, string>>({});

    // Methods
    const updatePropertySettings = () => {
        props.updatePropertySettings(PROPERTY_NAME.FONT_SIZE, {
            ...formValue,
            syntax: utilsPropertySyntax.fontSize(formValue)
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

    useEffect(() => {
        setCurrentValueTab(props.propertySettings.valueType)
        setFormValue(initialValues)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.propertySettings.syntax])

    return (
        <form>
            <PropertyConfigItem title="Tamanho">
                <>
                    <ValueTypeButtonGroup
                        valueTypeName="valueType"
                        currentValueTab={currentValueTab}
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
                                    { title: true, list: ['Absolutos', ...absoluteSizeList] },
                                    { title: true, list: ['Relativos', ...relativeFontSizeList] },
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
