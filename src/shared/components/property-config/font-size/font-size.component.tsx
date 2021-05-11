import { useState, useEffect } from 'react';
// Components
import { PropertyConfigItem } from "../../property-config-menu/property-config-item/property-config-item.component";
import { ValueTypeButtonGroup } from '../../value-type-button-group/value-type-button-group.component';
import { MeasurementUnitsFields } from '../../generic-input/measurement-units/measurement-units.component';
// Utils
import { utilsPropertySyntax } from '../../../utils/property-syntax.utils';
import { filterField } from '../../../utils/check-filter-field.utils';
// Models
import { FontSizeProperty, VALUE_TYPE } from '../../../models/property-config.model';
import { PROPERTY_NAME } from '../../../models/property-name.model';
import { measurementUnitsList } from '../../../models/property-value/measurement-units.model';
import { absoluteSizeList, ABSOLUTE_SIZE } from '../../../models/property-value/absolute-size.model';
import { relativeSizeList, RELATIVE_SIZE } from '../../../models/property-value/relative-size.model';
import { globalValueList, GLOBAL_VALUE } from '../../../models/property-value/global-value.model';
// Style
import { useStyles } from "./font-size.style";
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
interface FontSizeConfigProps {
    propertySettings: FontSizeProperty;
    updatePropertySettings: (propertyName: PROPERTY_NAME, newPropertySettings: FontSizeProperty) => void;
}

export const FontSizeConfig = (props: FontSizeConfigProps): JSX.Element => {
    const classes = useStyles();
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

            <PropertyConfigItem title="Tamanho">
                <>
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
                                        Absolutos
                                    </MenuItem>
                                    {absoluteSizeList.map((absoluteSize: ABSOLUTE_SIZE) => (
                                        <MenuItem key={absoluteSize} value={absoluteSize}>{absoluteSize}</MenuItem>
                                    ))}

                                    <MenuItem value="" disabled>
                                        <ListItemIcon className={classes.listItemIcon}><ArrowRightIcon fontSize="small" /></ListItemIcon>
                                        Relativos
                                    </MenuItem>
                                    {relativeSizeList.map((relativeSize: RELATIVE_SIZE) => (
                                        <MenuItem key={relativeSize} value={relativeSize}>{relativeSize}</MenuItem>
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
