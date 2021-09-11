// Translates
import { i18n } from '../../../translate/i18n';
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
    valueTypeName: string;
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
                        props.validateFields(props.valueTypeName, value);
                        props.setCurrentValueTab(value);
                    }
                }}
                aria-label={i18n.t('buttonGroup.valueType.buttonGroupContainer.ariaLabel')}
                size="small"
            >
                <ToggleButton value={VALUE_TYPE.FREE} aria-label={i18n.t('buttonGroup.valueType.free.ariaLabel')}>
                    {i18n.t('buttonGroup.valueType.free.name')}
                </ToggleButton>
                <ToggleButton value={VALUE_TYPE.PREDEFINED} aria-label={i18n.t('buttonGroup.valueType.predefined.ariaLabel')}>
                    {i18n.t('buttonGroup.valueType.predefined.name')}
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
};
