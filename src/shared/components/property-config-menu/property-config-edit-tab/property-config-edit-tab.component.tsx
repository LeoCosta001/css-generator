import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// Redux
import { actionAppProperty } from '../../../../store-config/actions/app-property.actions';
// Constants
import { TOOLTIP_DELAY } from '../../../constants/delay.constant';
// Components
import { PropertyConfigItem } from '../property-config-item/property-config-item.component';
import { FontSizeConfig } from '../../property-config/font-size/font-size.component';
// Models
import { TextAppProperty, TextAppPropertyState } from '../../../models/app/text-app-property.model';
import { AllReducerState } from '../../../models/reducers/all-reducer-state.model';
import { AllPropertySettings, FontSizeProperty } from '../../../models/property-config.model';
import { PROPERTY_NAME } from '../../../models/property-name.model';
// Style
import { useStyles } from "./property-config-edit-tab.style";
// Material-ui
import {
    List,
    Divider,
    Toolbar,
    IconButton,
    Tooltip,
    Box
} from '@material-ui/core';
import {
    Undo as UndoIcon,
    Tune as TuneIcon
} from '@material-ui/icons';

export const PropertyConfigEditTab = (): JSX.Element => {
    const classes = useStyles();

    // Redux selectors
    const appPropertyConfig: TextAppPropertyState = useSelector((state: AllReducerState) => state.textAppProperty);

    // States 
    const [selectedAppProperty, setSelectedAppProperty] = useState<TextAppProperty>(getSelectedAppProperty());

    // Methods
    function getSelectedAppProperty(): TextAppProperty {
        return appPropertyConfig.list.filter((appProperty: TextAppProperty) => appPropertyConfig.selected === appProperty.property)[0];
    }

    const updatePropertySettings = (propertyName: PROPERTY_NAME, newPropertySettings: AllPropertySettings) => {
        actionAppProperty.updateAppPropertySettings(propertyName, newPropertySettings)
    }

    const getPropertyConfigRender = (propertyName: PROPERTY_NAME): JSX.Element => {
        switch (propertyName) {
            case PROPERTY_NAME.FONT_SIZE:
                if (selectedAppProperty.isActive) return (
                    <FontSizeConfig
                        propertySettings={(selectedAppProperty.propertySettings['font-size'] as FontSizeProperty)}
                        updatePropertySettings={updatePropertySettings}
                    />);
                break;

            default:
                return (
                    <>
                        <PropertyConfigItem title="Teste">
                            <>
                                <Box>{selectedAppProperty.property}</Box>
                                <Box fontStyle="bold">Em breve...</Box>
                            </>
                        </PropertyConfigItem>
                        <Divider />
                    </>
                )
        }

        return (
            <>
                <PropertyConfigItem>
                    <Box textAlign="center">Propriedade desativada.</Box>
                </PropertyConfigItem>
                <Divider />
            </>
        )
    }

    // Effects
    useEffect(() => {
        setSelectedAppProperty(getSelectedAppProperty());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appPropertyConfig]);

    return (
        <Box className={classes.configMenuContainer}>
            {/* Property config */}
            <List className={classes.list}>
                {getPropertyConfigRender(selectedAppProperty.property)}
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
};
