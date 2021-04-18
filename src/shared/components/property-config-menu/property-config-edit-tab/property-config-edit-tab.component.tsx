import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// Constants
import { TOOLTIP_DELAY } from '../../../constants/delay.constant';
// Components
import { PropertyConfigItem } from '../property-config-item/property-config-item.component';
// Models
import { TextAppProperty, TextAppPropertyState } from '../../../models/reducers/text-app-property.model';
import { AllReducerState } from '../../../models/reducers/all-reducer-state.model';
// Style
import { useStyles } from "./property-config-edit-tab.style";
// Material-ui
import {
    List,
    Divider,
    Toolbar,
    IconButton,
    Tooltip,
    Box,
} from '@material-ui/core';
import {
    Undo as UndoIcon,
    Tune as TuneIcon,
} from '@material-ui/icons';

export const PropertyConfigEditTab = (): JSX.Element => {
    const classes = useStyles();

    // Redux selectors
    const textAppProperty: TextAppPropertyState = useSelector((state: AllReducerState) => state.textAppProperty);

    // States 
    const [selectedAppProperty, setSelectedAppProperty] = useState<TextAppProperty>(getSelectedAppProperty());

    // Methods
    function getSelectedAppProperty(): TextAppProperty {
        return textAppProperty.list
            .filter((textProperty: TextAppProperty) => textAppProperty.selected === textProperty.property)[0];
    }

    // Effects
    useEffect(() => {
        setSelectedAppProperty(getSelectedAppProperty());
    }, [textAppProperty]);

    return (
        <Box className={classes.configMenuContainer}>
            {/* Property config */}
            <List className={classes.list}>
                <PropertyConfigItem title="Teste">
                    <>
                        <Box>Propriedade: {selectedAppProperty.property}</Box>
                        <Box>Está ativado: {selectedAppProperty.isActive ? 'Sim' : 'Não'}</Box>
                    </>
                </PropertyConfigItem>

                <Divider />
            </List>

            {/* Footer */}
            <Box>
                <Divider />

                <Toolbar variant="dense" className={classes.toolBar}>
                    <Tooltip
                        placement="top"
                        enterDelay={TOOLTIP_DELAY.SUB_MENU}
                        enterNextDelay={TOOLTIP_DELAY.SUB_MENU}
                        title="Desfazer a ultima alteração"
                        arrow
                    >
                        <IconButton
                            classes={{ root: classes.iconHover }}
                            color="default"
                            size="small"
                            aria-label="Desfazer a ultima alteração"
                            onClick={() => alert('Em breve!')}
                        >
                            <UndoIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip
                        placement="top"
                        enterDelay={TOOLTIP_DELAY.SUB_MENU}
                        enterNextDelay={TOOLTIP_DELAY.SUB_MENU}
                        title="Voltar aos valores padrão"
                        arrow
                    >
                        <IconButton
                            classes={{ root: classes.iconHover }}
                            color="default"
                            size="small"
                            aria-label="Voltar aos valores padrão"
                            onClick={() => alert('Em breve!')}
                        >
                            <TuneIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </Box>
        </Box>
    );
}
