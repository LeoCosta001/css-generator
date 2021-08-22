import { useState, useEffect } from 'react';
// Components
import { PropertyConfigItem } from "../../property-config-menu/property-config-item/property-config-item.component";
import { ValueTypeButtonGroup } from '../../value-type-button-group/value-type-button-group.component';
import { ColorPickerFields } from '../../generic-input/color-picker/color-picker.component';
import { PredefinedValuesFields } from '../../generic-input/predefined-values/predefined-values.component';
// Utils
import { utilsPropertySyntax } from '../../../utils/property-syntax.utils';
// Models
import { ColorProperty, VALUE_TYPE } from '../../../models/property-config.model';
import { PROPERTY_NAME } from '../../../models/property-name.model';
import { keywordColorValueList } from '../../../models/property-value/keyword-value.model';
import { globalValueList } from '../../../models/property-value/global-value.model';
import { colorValueTypeList } from '../../../models/property-value/color-value-type.model';
// Material-ui
import {
    Divider,
    Grid,
} from "@material-ui/core";

// Interfaces
interface ColorConfigProps {
    propertySettings: ColorProperty;
    updatePropertySettings: (propertyName: PROPERTY_NAME, newPropertySettings: ColorProperty) => void;
}

export const ColorConfig = (props: ColorConfigProps): JSX.Element => {
    const initialValues: ColorProperty = {
        value: props.propertySettings.value,
        valueType: props.propertySettings.valueType,
        measurementUnit: props.propertySettings.measurementUnit,
        predefinedValue: props.propertySettings.predefinedValue,
        syntax: props.propertySettings.syntax
    };

    // States
    const [currentValueTab, setCurrentValueTab] = useState<VALUE_TYPE>(initialValues.valueType);
    const [formValue, setFormValue] = useState<ColorProperty>(initialValues);

    // Methods
    const updatePropertySettings = () => {
        props.updatePropertySettings(PROPERTY_NAME.COLOR, {
            ...formValue,
            syntax: utilsPropertySyntax.color(formValue)
        });
    };

    // Form
    const validateFields = (fieldName: string, value: any) => {
        setFormValue({
            ...formValue,
            [fieldName]: value
        });
    };

    // Effects
    useEffect(() => {
        updatePropertySettings();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formValue])

    useEffect(() => {
        setCurrentValueTab(props.propertySettings.valueType)
        setFormValue(initialValues)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.propertySettings.syntax])

    return (
        <form>
            <PropertyConfigItem title="Cor">
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
                            <ColorPickerFields
                                value={formValue.value}
                                valueInputName="value"
                                validateFields={validateFields}
                                gridSize={2}
                            />

                            <PredefinedValuesFields
                                predefinedValue={formValue.measurementUnit}
                                predefinedValueInputName="measurementUnit"
                                predefinedValueList={[
                                    { list: [...colorValueTypeList] }
                                ]}
                                validateFields={validateFields}
                                gridSize={10}
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
                                    { title: true, list: ['Cores', ...keywordColorValueList], isColorList: true },
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
