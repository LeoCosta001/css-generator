import { useState, useEffect } from 'react';
// Components
import { PropertyConfigItem } from "../../property-config-menu/property-config-item/property-config-item.component";
import { PredefinedValuesFields } from '../../generic-input/predefined-values/predefined-values.component';
// Utils
import { utilsPropertySyntax } from '../../../utils/property-syntax.utils';
// Models
import { FontFamilyProperty } from '../../../models/property-config.model';
import { PROPERTY_NAME } from '../../../models/property-name.model';
import { keywordFontFamilyValueList } from '../../../models/property-value/keyword-value.model';
// Material-ui
import {
    Divider,
    Grid
} from "@material-ui/core";

// Interfaces
interface FontFamilyConfigProps {
    propertySettings: FontFamilyProperty;
    updatePropertySettings: (propertyName: PROPERTY_NAME, newPropertySettings: FontFamilyProperty) => void;
}

export const FontFamilyConfig = (props: FontFamilyConfigProps): JSX.Element => {
    const initialValues: FontFamilyProperty = {
        valueType: props.propertySettings.valueType,
        predefinedValue: props.propertySettings.predefinedValue,
        syntax: props.propertySettings.syntax
    };

    // States
    const [formValue, setFormValue] = useState<FontFamilyProperty>(initialValues);

    // Methods
    const updatePropertySettings = () => {
        props.updatePropertySettings(PROPERTY_NAME.FONT_FAMILY, {
            ...formValue,
            syntax: utilsPropertySyntax.fontFamily(formValue)
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

    return (
        <form>
            <PropertyConfigItem title="Fonte">
                <Grid container spacing={1}>
                    <PredefinedValuesFields
                        predefinedValue={formValue.predefinedValue}
                        predefinedValueInputName="predefinedValue"
                        predefinedValueList={[
                            { title: false, list: [...keywordFontFamilyValueList] }
                        ]}
                        validateFields={validateFields}
                    />
                </Grid>
            </PropertyConfigItem>
            <Divider />
        </form>
    );
};
