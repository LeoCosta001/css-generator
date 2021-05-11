import { useState, useEffect } from 'react';
// Components
import { PropertyConfigItem } from "../../property-config-menu/property-config-item/property-config-item.component";
import { ValueTypeButtonGroup } from '../../value-type-button-group/value-type-button-group.component';
// Utils
import { utilsPropertySyntax } from '../../../utils/property-syntax.utils';
import { filterField } from '../../../utils/check-filter-field.utils';
// Models
import { FontStretchProperty, VALUE_TYPE } from '../../../models/property-config.model';
import { PROPERTY_NAME } from '../../../models/property-name.model';
import { measurementUnitsList, MEASUREMENT_UNITS } from '../../../models/property-value/measurement-units.model';
import { globalValueList, GLOBAL_VALUE } from '../../../models/property-value/global-value.model';
import { keywordFontStretchValueList, KEYWORD_FONT_STRETCH_VALUE } from '../../../models/property-value/keyword-value.model';
// Style
import { useStyles } from "./font-stretch.style";
// Material-ui
import {
    Divider,
    Grid,
    ListItemIcon,
    MenuItem,
    TextField
} from "@material-ui/core";
import {
    ArrowRight as ArrowRightIcon
} from '@material-ui/icons';

// Interfaces
interface FontStretchConfigProps {
    propertySettings: FontStretchProperty;
    updatePropertySettings: (propertyName: PROPERTY_NAME, newPropertySettings: FontStretchProperty) => void;
}

export const FontStretchConfig = (props: FontStretchConfigProps): JSX.Element => {
    const classes = useStyles();
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
            <ValueTypeButtonGroup
                currentValueTab={currentValueTab}
                validateFields={validateFields}
                setCurrentValueTab={setCurrentValueTab}
            />

            <PropertyConfigItem title="Alongamento">
                <>
                    {/* Free values */}
                    {currentValueTab === VALUE_TYPE.FREE && (
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    name="value"
                                    type="text"
                                    autoComplete="off"
                                    value={formValue.value}
                                    onChange={(event) => validateFields('value', event.target.value)}
                                    onBlur={(event) => validateFields('value', event.target.value)}
                                    error={Boolean(formError.value)}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    select
                                    name="measurementUnit"
                                    value={formValue.measurementUnit}
                                    variant="outlined"
                                    size="small"
                                    onChange={(event) => validateFields('measurementUnit', event.target.value)}
                                    onBlur={(event) => validateFields('measurementUnit', event.target.value)}
                                    error={Boolean(formError.measurementUnit)}
                                    disabled
                                >
                                    {measurementUnitsList.map((measurementUnit: MEASUREMENT_UNITS) => (
                                        <MenuItem key={measurementUnit} value={measurementUnit}>{measurementUnit}</MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                    )}

                    {/* Predefined values */}
                    {currentValueTab === VALUE_TYPE.PREDEFINED && (
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    select
                                    name="predefinedValue"
                                    value={formValue.predefinedValue}
                                    variant="outlined"
                                    size="small"
                                    onChange={(event) => validateFields('predefinedValue', event.target.value)}
                                    onBlur={(event) => validateFields('predefinedValue', event.target.value)}
                                    error={Boolean(formError.predefinedValue)}
                                >
                                    <MenuItem value="" disabled>
                                        <ListItemIcon className={classes.listItemIcon}><ArrowRightIcon fontSize="small" /></ListItemIcon>
                                        Palavras-chave
                                    </MenuItem>
                                    {keywordFontStretchValueList.map((keywordValue: KEYWORD_FONT_STRETCH_VALUE) => (
                                        <MenuItem key={keywordValue} value={keywordValue}>{keywordValue}</MenuItem>
                                    ))}

                                    <MenuItem value="" disabled>
                                        <ListItemIcon className={classes.listItemIcon}><ArrowRightIcon fontSize="small" /></ListItemIcon>
                                        Globais
                                    </MenuItem>
                                    {globalValueList.map((globalValue: GLOBAL_VALUE) => (
                                        <MenuItem key={globalValue} value={globalValue}>{globalValue}</MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                    )}
                </>
            </PropertyConfigItem>
            <Divider />
        </form>
    );
};
