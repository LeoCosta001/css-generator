import { useState, useEffect } from 'react';
// Translates
import { i18n } from '../../../../translate/i18n';
// Components
import { PropertyConfigItem } from "../../property-config-menu/property-config-item/property-config-item.component";
import { PredefinedValuesFields } from '../../generic-input/predefined-values/predefined-values.component';
// Utils
import { utilsPropertySyntax } from '../../../utils/property-syntax.utils';
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

    // Methods
    const updatePropertySettings = () => {
        props.updatePropertySettings(PROPERTY_NAME.FONT_WEIGHT, {
            ...formValue,
            syntax: utilsPropertySyntax.fontWeight(formValue)
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
        setFormValue(initialValues)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.propertySettings.syntax])

    return (
        <form>
            <PropertyConfigItem title={i18n.t('propertyConfigItem.fontWeight.title')}>
                <Grid container spacing={1}>
                    <PredefinedValuesFields
                        predefinedValue={formValue.predefinedValue}
                        predefinedValueInputName="predefinedValue"
                        predefinedValueList={[
                            {
                                title: true,
                                list: [
                                    i18n.t('propertyConfigItem.fontWeight.predefinedValueTitle.keywords'),
                                    ...keywordFontWeightValueList
                                ]
                            },
                            {
                                title: true,
                                list: [
                                    i18n.t('propertyConfigItem.fontWeight.predefinedValueTitle.relative'),
                                    ...relativeFontWeightValueList
                                ]
                            },
                            {
                                title: true,
                                list: [
                                    i18n.t('propertyConfigItem.fontWeight.predefinedValueTitle.global'),
                                    ...globalValueList
                                ]
                            },
                        ]}
                        validateFields={validateFields}
                    />
                </Grid>
            </PropertyConfigItem>
            <Divider />
        </form>
    );
};
