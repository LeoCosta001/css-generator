// Style
import { useStyles } from "./predefined-values.style";
// Material-ui
import {
    Grid,
    TextField,
    MenuItem,
    ListItemIcon,
    GridSize
} from "@material-ui/core";
import {
    ArrowRight as ArrowRightIcon
} from '@material-ui/icons';

// Interfaces
interface PredefinedValueItem {
    title?: boolean;
    list: string[];
}

interface PredefinedValuesFieldsProps {
    predefinedValue: string;
    predefinedValueInputName: string;
    predefinedValueList: PredefinedValueItem[]
    validateFields: (fieldName: string, value: any) => void;
    gridSize?: GridSize;
}

export const PredefinedValuesFields = (props: PredefinedValuesFieldsProps): JSX.Element => {
    const classes = useStyles();

    return (
        <Grid item xs={props.gridSize ? props.gridSize : 12}>
            <TextField
                fullWidth
                select
                name={props.predefinedValueInputName}
                value={props.predefinedValue ? props.predefinedValue : ''}
                variant="outlined"
                size="small"
                onChange={(event) => props.validateFields(props.predefinedValueInputName, event.target.value)}
                onBlur={(event) => props.validateFields(props.predefinedValueInputName, event.target.value)}
            >
                {
                    props.predefinedValueList.map((predefinedValueItem: PredefinedValueItem) => (
                        predefinedValueItem.list.map((predefinedValue: string, index: number) =>
                            predefinedValueItem.title && index === 0 ? (
                                <MenuItem key={predefinedValue} value="" disabled>
                                    <ListItemIcon className={classes.listItemIcon}><ArrowRightIcon fontSize="small" /></ListItemIcon>
                                    { predefinedValue}
                                </MenuItem>
                            ) : (
                                <MenuItem key={predefinedValue} value={predefinedValue}>{predefinedValue}</MenuItem>
                            )
                        )
                    ))
                }
            </TextField>
        </Grid>
    );
};
