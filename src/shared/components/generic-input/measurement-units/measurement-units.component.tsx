// Material-ui
import {
    Grid,
    TextField,
    MenuItem
} from "@material-ui/core";

// Interfaces
interface MeasurementUnitsFieldsProps {
    value: string;
    valueError: boolean;
    valueInputName: string;
    measurementUnit: string;
    measurementUnitInputName: string;
    measurementUnitsList: string[]
    validateFields: (fieldName: string, value: any) => void;
}

export const MeasurementUnitsFields = (props: MeasurementUnitsFieldsProps): JSX.Element => {
    return (
        <>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    name={props.valueInputName}
                    type="text"
                    autoComplete="off"
                    value={props.value}
                    onChange={(event) => props.validateFields(props.valueInputName, event.target.value)}
                    onBlur={(event) => props.validateFields(props.valueInputName, event.target.value)}
                    error={props.valueError}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    select
                    name={props.measurementUnitInputName}
                    value={props.measurementUnit}
                    variant="outlined"
                    size="small"
                    onChange={(event) => props.validateFields(props.measurementUnitInputName, event.target.value)}
                    onBlur={(event) => props.validateFields(props.measurementUnitInputName, event.target.value)}
                >
                    {props.measurementUnitsList.map((measurementUnit: string) => (
                        <MenuItem key={measurementUnit} value={measurementUnit}>{measurementUnit}</MenuItem>
                    ))}
                </TextField>
            </Grid>
        </>
    );
};
