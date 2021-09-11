import { useState, useEffect } from 'react';
// Translates
import { i18n } from '../../../../translate/i18n';
// Constants
import { textShadowEmpty } from '../../../models/empty-property-config.model';
// Components
import { PropertyConfigItem } from "../../property-config-menu/property-config-item/property-config-item.component";
import { ValueTypeButtonGroup } from '../../value-type-button-group/value-type-button-group.component';
import { ColorPickerFields } from '../../generic-input/color-picker/color-picker.component';
import { PredefinedValuesFields } from '../../generic-input/predefined-values/predefined-values.component';
import { MeasurementUnitsFields } from '../../generic-input/measurement-units/measurement-units.component';
// Utils
import { utilsPropertySyntax } from '../../../utils/property-syntax.utils';
import { InputCheck, inputCheck } from '../../../utils/input-check.utils';
// Models
import { TextShadowProperty, TextShadowValue, VALUE_TYPE } from '../../../models/property-config.model';
import { PROPERTY_NAME } from '../../../models/property-name.model';
import { keywordColorValueList } from '../../../models/property-value/keyword-value.model';
import { globalValueList } from '../../../models/property-value/global-value.model';
import { colorValueTypeList } from '../../../models/property-value/color-value-type.model';
import { measurementUnitsWithoutPercentList } from '../../../models/property-value/measurement-units.model';
// Style
import { useStyles } from './text-shadow.style';
// Material-ui
import {
    Divider,
    Grid,
    Box,
    Button
} from "@material-ui/core";
import {
    Pagination
} from '@material-ui/lab';

// Interfaces
interface TextShadowConfigProps {
    propertySettings: TextShadowProperty;
    updatePropertySettings: (propertyName: PROPERTY_NAME, newPropertySettings: TextShadowProperty) => void;
}

export const TextShadowConfig = (props: TextShadowConfigProps): JSX.Element => {
    const classes = useStyles();
    const maxTextShadowTab = 7;
    const initialValues: TextShadowProperty = {
        value: props.propertySettings.value,
        syntax: props.propertySettings.syntax
    };

    // States
    const [currentTextShadowTab, setCurrentTextShadowTab] = useState<number>(1);
    const [totalTextShadowTab, setTotalTextShadowTab] = useState<number>(initialValues.value.length);
    const [currentColorValueTab, setCurrentColorValueTab] = useState<VALUE_TYPE>(VALUE_TYPE.FREE);
    const [formValue, setFormValue] = useState<TextShadowProperty>(initialValues);
    const [formError, setFormError] = useState<Record<string, string>>({});

    // Methods
    const updatePropertySettings = () => {
        props.updatePropertySettings(PROPERTY_NAME.TEXT_SHADOW, {
            ...formValue,
            syntax: utilsPropertySyntax.textShadow(formValue)
        });
    };

    const changeTextShadowTab = (event: React.ChangeEvent<unknown>, page: number) => {
        setFormError({});
        setCurrentTextShadowTab(page);
        changeColorValueTab(page - 1);
    };

    const changeColorValueTab = (textShadowIndex: number) => {
        setCurrentColorValueTab(formValue.value[textShadowIndex].color.valueType);
    };

    const addTextShadowTab = () => {
        if (totalTextShadowTab < maxTextShadowTab) {
            setTotalTextShadowTab(totalTextShadowTab + 1);

            setFormValue({
                ...formValue,
                value: [...formValue.value, ...textShadowEmpty.value]
            });
        }
    };

    const removeTextShadowTab = () => {
        if (totalTextShadowTab > 1) {
            const previewPage = totalTextShadowTab - 1;
            const newValue = formValue.value;
            newValue.pop();

            setFormValue({
                ...formValue,
                value: newValue
            });

            setTotalTextShadowTab(previewPage);
            if (currentTextShadowTab === totalTextShadowTab) {
                setCurrentTextShadowTab(previewPage);
                changeColorValueTab(previewPage - 1);
            };
        }
    };

    // Form
    const updateValue = (position: 'positionY' | 'positionX' | 'blurRadius' | 'color', fieldName: string, value: TextShadowProperty): TextShadowValue[] => {
        return formValue.value.map((textShadowValue: TextShadowValue, index: number) => {
            if (currentTextShadowTab - 1 === index) {
                return {
                    ...textShadowValue,
                    [position]: {
                        ...textShadowValue[position],
                        [fieldName]: value
                    }
                }
            } else {
                return textShadowValue
            }
        })
    };

    const validateFields = (fieldName: string, value: any) => {
        // Normalize shadow value
        let newValue;
        const fieldSelected = fieldName.split('_');

        if (!fieldSelected) return;

        if (fieldSelected[1] === 'color' ||
            fieldSelected[1] === 'positionY' ||
            fieldSelected[1] === 'positionX' ||
            fieldSelected[1] === 'blurRadius') {
            newValue = updateValue(fieldSelected[1], fieldSelected[0], value);
        }

        if (!newValue) return;

        // Check errors
        let errors: Record<string, string> = {};


        if (fieldSelected[1] === 'positionY' ||
            fieldSelected[1] === 'positionX' ||
            fieldSelected[1] === 'blurRadius') {
            const getInputCheck: InputCheck = inputCheck.measurementUnitsValue(fieldName, newValue[currentTextShadowTab - 1][fieldSelected[1]].value, true)
            errors = getInputCheck.errors;
            newValue[currentTextShadowTab - 1][fieldSelected[1]].value = getInputCheck.normalizedValue;
        }

        setFormError(errors);

        // Update form values
        setFormValue({
            ...formValue,
            value: newValue
        });
    };

    // Effects
    useEffect(() => {
        updatePropertySettings();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formValue])

    useEffect(() => {
        const totalTextShadowTabQuantity = props.propertySettings.value.length;
        const currentTabIsDeleted = currentTextShadowTab > totalTextShadowTabQuantity;

        if (currentTabIsDeleted) setCurrentTextShadowTab(totalTextShadowTabQuantity);

        setTotalTextShadowTab(totalTextShadowTabQuantity);
        setFormValue(initialValues);
        setCurrentColorValueTab(initialValues.value[currentTabIsDeleted ? totalTextShadowTabQuantity - 1 : currentTextShadowTab - 1].color.valueType);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.propertySettings.syntax])

    return (
        <form>
            <PropertyConfigItem title={i18n.t('propertyConfigItem.textShadow.selectShadow.title')}>
                <>
                    <Box pb={2} display="flex" justifyContent="space-between">
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={addTextShadowTab}
                            disabled={totalTextShadowTab === maxTextShadowTab}
                        >
                            {i18n.t('button.add')}
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={removeTextShadowTab}
                            disabled={totalTextShadowTab === 1}
                        >
                            {i18n.t('button.remove')}
                        </Button>
                    </Box>
                    <Box className={classes.pagination} display="flex" justifyContent="center">
                        <Pagination
                            count={totalTextShadowTab}
                            hideNextButton={true}
                            hidePrevButton={true}
                            page={currentTextShadowTab}
                            onChange={changeTextShadowTab}
                            variant="outlined"
                            shape="rounded"
                            size="small"
                        />
                    </Box>
                </>
            </PropertyConfigItem>

            <Divider />

            <PropertyConfigItem title={i18n.t('propertyConfigItem.textShadow.color.title')}>
                <>
                    <ValueTypeButtonGroup
                        currentValueTab={currentColorValueTab}
                        valueTypeName="valueType_color"
                        validateFields={validateFields}
                        setCurrentValueTab={setCurrentColorValueTab}
                    />

                    {/* Free color values */}
                    {formValue.value[currentTextShadowTab - 1].color.valueType === VALUE_TYPE.FREE && (
                        <Grid container spacing={1}>
                            <ColorPickerFields
                                value={formValue.value[currentTextShadowTab - 1].color.value}
                                valueInputName="value_color"
                                validateFields={validateFields}
                                gridSize={2}
                            />

                            <PredefinedValuesFields
                                predefinedValue={formValue.value[currentTextShadowTab - 1].color.measurementUnit}
                                predefinedValueInputName="measurementUnit_color"
                                predefinedValueList={[
                                    { list: [...colorValueTypeList] }
                                ]}
                                validateFields={validateFields}
                                gridSize={10}
                            />
                        </Grid>
                    )}

                    {/* Predefined color values */}
                    {formValue.value[currentTextShadowTab - 1].color.valueType === VALUE_TYPE.PREDEFINED && (
                        <Grid container spacing={1}>
                            <PredefinedValuesFields
                                predefinedValue={formValue.value[currentTextShadowTab - 1].color.predefinedValue}
                                predefinedValueInputName="predefinedValue_color"
                                predefinedValueList={[
                                    {
                                        title: true,
                                        list: [
                                            i18n.t('propertyConfigItem.textShadow.color.predefinedValueTitle.color'),
                                            ...keywordColorValueList
                                        ],
                                        isColorList: true },
                                    {
                                        title: true,
                                        list: [
                                            i18n.t('propertyConfigItem.textShadow.color.predefinedValueTitle.global'),
                                            ...globalValueList
                                        ]
                                    },
                                ]}
                                validateFields={validateFields}
                            />
                        </Grid>
                    )}
                </>
            </PropertyConfigItem>

            <Divider />

            <PropertyConfigItem title={i18n.t('propertyConfigItem.textShadow.positionY.title')}>
                <Grid container spacing={1}>
                    <MeasurementUnitsFields
                        value={formValue.value[currentTextShadowTab - 1].positionY.value}
                        valueError={Boolean(formError.value_positionY)}
                        valueInputName="value_positionY"
                        measurementUnit={formValue.value[currentTextShadowTab - 1].positionY.measurementUnit}
                        measurementUnitInputName="measurementUnit_positionY"
                        measurementUnitsList={measurementUnitsWithoutPercentList}
                        validateFields={validateFields}
                    />
                </Grid>
            </PropertyConfigItem>

            <Divider />

            <PropertyConfigItem title={i18n.t('propertyConfigItem.textShadow.positionX.title')}>
                <Grid container spacing={1}>
                    <MeasurementUnitsFields
                        value={formValue.value[currentTextShadowTab - 1].positionX.value}
                        valueError={Boolean(formError.value_positionX)}
                        valueInputName="value_positionX"
                        measurementUnit={formValue.value[currentTextShadowTab - 1].positionX.measurementUnit}
                        measurementUnitInputName="measurementUnit_positionX"
                        measurementUnitsList={measurementUnitsWithoutPercentList}
                        validateFields={validateFields}
                    />
                </Grid>
            </PropertyConfigItem>

            <Divider />

            <PropertyConfigItem title={i18n.t('propertyConfigItem.textShadow.blur.title')}>
                <Grid container spacing={1}>
                    <MeasurementUnitsFields
                        value={formValue.value[currentTextShadowTab - 1].blurRadius.value}
                        valueError={Boolean(formError.value_blurRadius)}
                        valueInputName="value_blurRadius"
                        measurementUnit={formValue.value[currentTextShadowTab - 1].blurRadius.measurementUnit}
                        measurementUnitInputName="measurementUnit_blurRadius"
                        measurementUnitsList={measurementUnitsWithoutPercentList}
                        validateFields={validateFields}
                    />
                </Grid>
            </PropertyConfigItem>

            <Divider />
        </form>
    );
};
