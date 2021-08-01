import { useState, useEffect } from 'react';
// Components
import { PropertyConfigItem } from "../../property-config-menu/property-config-item/property-config-item.component";
import { PredefinedValuesFields } from '../../generic-input/predefined-values/predefined-values.component';
// Utils
import { utilsPropertySyntax } from '../../../utils/property-syntax.utils';
// Models
import { FontVariantProperty } from '../../../models/property-config.model';
import { PROPERTY_NAME } from '../../../models/property-name.model';
import { globalValueList } from '../../../models/property-value/global-value.model';
import { keywordFontVariantValueList } from '../../../models/property-value/keyword-value.model';
// Material-ui
import {
    Divider,
    Grid
} from "@material-ui/core";

// Interfaces
interface FontVariantConfigProps {
    propertySettings: FontVariantProperty;
    updatePropertySettings: (propertyName: PROPERTY_NAME, newPropertySettings: FontVariantProperty) => void;
}

export const FontVariantConfig = (props: FontVariantConfigProps): JSX.Element => {
    const initialValues: FontVariantProperty = {
        valueType: props.propertySettings.valueType,
        predefinedValue: props.propertySettings.predefinedValue,
        syntax: props.propertySettings.syntax
    };

    // States
    const [formValue, setFormValue] = useState<FontVariantProperty>(initialValues);

    // Methods
    const updatePropertySettings = () => {
        props.updatePropertySettings(PROPERTY_NAME.FONT_VARIANT, {
            ...formValue,
            syntax: utilsPropertySyntax.fontVariant(formValue)
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
            <PropertyConfigItem title="Variação">
                <Grid container spacing={1}>
                    <PredefinedValuesFields
                        predefinedValue={formValue.predefinedValue}
                        predefinedValueInputName="predefinedValue"
                        predefinedValueList={[
                            { title: true, list: ['Palavras-chave', ...keywordFontVariantValueList] },
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
