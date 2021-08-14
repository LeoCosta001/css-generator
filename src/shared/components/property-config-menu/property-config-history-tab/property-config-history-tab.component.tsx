import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// Components
import { PropertyConfigItem } from '../property-config-item/property-config-item.component';
// Models
import { AllReducerState } from '../../../models/reducers/all-reducer-state.model';
import { TextAppProperty, TextAppPropertyHistory, TextAppPropertyState } from '../../../models/app/text-app-property.model';
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

    // Redux selectors
    const appPropertyConfig: TextAppPropertyState = useSelector((state: AllReducerState) => state.textAppProperty);

    // States 
    const [selectedAppProperty, setSelectedAppProperty] = useState<TextAppProperty>(getSelectedAppProperty());

    // Methods
    function getSelectedAppProperty(): TextAppProperty {
        return appPropertyConfig.list.filter((appProperty: TextAppProperty) => appPropertyConfig.selected === appProperty.property)[0];
    };

    // Effects
    useEffect(() => {
        setSelectedAppProperty(getSelectedAppProperty());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appPropertyConfig]);

    return (
        <Box className={classes.configMenuContainer}>
            {/* Property config */}
            <List className={classes.list}>
                {selectedAppProperty.propertySettingsHistory.map((textAppPropertyHistory: TextAppPropertyHistory, index: number) => (
                    <React.Fragment key={index}>
                        <PropertyConfigItem title={textAppPropertyHistory.time.format('HH:mm:ss')} hoverEffect>
                            <Box>{textAppPropertyHistory.propertySyntax}</Box>
                        </PropertyConfigItem>

                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
};
