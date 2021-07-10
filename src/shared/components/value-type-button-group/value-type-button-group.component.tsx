// Models
import { VALUE_TYPE } from '../../models/property-config.model';
// Material-ui
import {
    Box
} from "@material-ui/core";
import {
    ToggleButton,
    ToggleButtonGroup
} from '@material-ui/lab';

// Interfaces
interface ValueTypeButtonGroupProps {
    currentValueTab: VALUE_TYPE;
    validateFields: (fieldName: string, value: any) => void;
    setCurrentValueTab: (value: React.SetStateAction<VALUE_TYPE>) => void;
}

export const ValueTypeButtonGroup = (props: ValueTypeButtonGroupProps): JSX.Element => {
    return (
        <Box pb={2} display="flex">
            <ToggleButtonGroup
                exclusive
                value={props.currentValueTab}
                onChange={(event: React.MouseEvent<HTMLElement, MouseEvent>, value: VALUE_TYPE) => {
                    if (value !== null) {
                        props.validateFields('valueType', value);
                        props.setCurrentValueTab(value);
                    }
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
    );
};
