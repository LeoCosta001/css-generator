// Components
import { PropertyConfigItem } from '../property-config-item/property-config-item.component';
// Style
import { useStyles } from "./property-config-history-tab.style";
// Material-ui
import {
    List,
    Divider,
    Box
} from '@material-ui/core';

export const PropertyConfigHistoryTab = (): JSX.Element => {
    const classes = useStyles();

    return (
        <Box className={classes.configMenuContainer}>
            {/* Property config */}
            <List className={classes.list}>
                <PropertyConfigItem title="*Nome do que foi editado*">
                    <>
                        <Box>*horário que foi editado* - *Descrição do que foi editado*</Box>
                    </>
                </PropertyConfigItem>

                <Divider />
            </List>
        </Box>
    );
};
