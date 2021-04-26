import { useState } from 'react';
import { Form, Formik, FormikErrors, FormikValues } from 'formik';
// Components
import { PropertyConfigItem } from "../../property-config-menu/property-config-item/property-config-item.component";
// Utils
import { utilsPropertySyntax } from '../../../utils/property-syntax.utils';
import { filterField } from '../../../utils/check-filter-field.utils';
// Models
import { FontSizeProperty, FontSizePropertySyntax, VALUE_TYPE } from '../../../models/property-config.model';
import { PROPERTY_NAME } from '../../../models/property-name.model';
import { measurementUnitsList, MEASUREMENT_UNITS } from '../../../models/property-value/measurement-units.model';
import { absoluteSizeList, ABSOLUTE_SIZE } from '../../../models/property-value/absolute-size.model';
import { relativeSizeList, RELATIVE_SIZE } from '../../../models/property-value/relative-size.model';
import { globalValueList, GLOBAL_VALUE } from '../../../models/property-value/global-value.model';
// Style
import { useStyles } from "./font-size.style";
// Material-ui
import {
    Box,
    Divider,
    Grid,
    ListItemIcon,
    MenuItem,
    TextField
} from "@material-ui/core";
import {
    ToggleButton,
    ToggleButtonGroup
} from '@material-ui/lab';
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
    const initialValues = {
        value: props.propertySettings.value,
        measurementUnit: props.propertySettings.measurementUnit,
        valueType: props.propertySettings.valueType,
        fontPredefinedValue: props.propertySettings.predefinedValue,
        syntax: props.propertySettings.syntax
    };

    // States
    const [fontSizeValueTab, setFontSizeValueTab] = useState<VALUE_TYPE>(VALUE_TYPE.FREE);

    // Methods
    const updatePropertySettings = (values: FormikValues) => {
        const updateValue: FontSizePropertySyntax = {
            value: values.value,
            measurementUnit: values.measurementUnit,
            predefinedValue: values.fontPredefinedValue,
            valueType: values.valueType
        };

        props.updatePropertySettings(PROPERTY_NAME.FONT_SIZE, {
            ...updateValue,
            syntax: utilsPropertySyntax.fontSize(updateValue)
        });
    };

    // Form
    const validateFields = (values: FormikValues): FormikErrors<FormikValues> => {
        const errors: FormikErrors<FormikValues> = {};

        // eslint-disable-next-line no-mixed-operators
        if (!values.value || values.measurementUnit && isNaN(Number(values.value))) {
            errors.value = 'Valor inválido';
        }

        if (values.value === '0') {
            errors.value = 'Insira uma valor maior que 0';
        }

        return errors;
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={updatePropertySettings}
            validate={validateFields}
            validateOnChange={true}
        >
            {({ values, errors, touched, handleChange, handleSubmit, handleBlur, setFieldValue }) => (
                <Form onChange={handleSubmit}>
                    <Box pt={2} display="flex" justifyContent="center">
                        <ToggleButtonGroup
                            exclusive
                            value={fontSizeValueTab}
                            onChange={(event: React.MouseEvent<HTMLElement, MouseEvent>, value: VALUE_TYPE) => {
                                setFieldValue('valueType', value, true);
                                setFontSizeValueTab(value);
                            }}
                            aria-label="Tipo de seleção de valores"
                            size="small"
                        >
                            <ToggleButton value={VALUE_TYPE.FREE} aria-label="Valores explicitos">
                                Livre
                            </ToggleButton>
                            <ToggleButton value={VALUE_TYPE.PREDEFINED} aria-label="Valores pré-definidos">
                                Pré-definido
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Box>

                    <PropertyConfigItem title="Tamanho">
                        <>
                            {/* Free values */}
                            {fontSizeValueTab === VALUE_TYPE.FREE && (
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            name="value"
                                            type="text"
                                            autoComplete="off"
                                            value={values.value}
                                            onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                                                const transform: string = filterField.normalize.floatNumber(event.target.value, true)
                                                setFieldValue('value', transform, true);
                                            }}
                                            onBlur={handleBlur}
                                            error={touched.value && !!errors.value}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            select
                                            name="measurementUnit"
                                            value={values.measurementUnit}
                                            variant="outlined"
                                            size="small"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.measurementUnit && !!errors.measurementUnit}
                                        >
                                            {measurementUnitsList.map((measurementUnit: MEASUREMENT_UNITS) => (
                                                <MenuItem key={measurementUnit} value={measurementUnit}>{measurementUnit}</MenuItem>
                                            ))}
                                        </TextField>
                                    </Grid>
                                </Grid>
                            )}

                            {/* Predefined values */}
                            {fontSizeValueTab === VALUE_TYPE.PREDEFINED && (
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            select
                                            name="fontPredefinedValue"
                                            value={values.fontPredefinedValue}
                                            variant="outlined"
                                            size="small"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.fontPredefinedValue && !!errors.fontPredefinedValue}
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
                </Form>
            )}
        </Formik >
    );
};
