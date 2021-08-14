import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// Constants
import { TOOLTIP_DELAY } from '../../constants/delay.constant';
// Components
import { PropertyConfigEditTab } from './property-config-edit-tab/property-config-edit-tab.component';
import { PropertyConfigHistoryTab } from './property-config-history-tab/property-config-history-tab.component';
// Models
import { TextAppProperty, TextAppPropertyState } from '../../models/app/text-app-property.model';
import { AllReducerState } from '../../models/reducers/all-reducer-state.model';
// Style
import { useStyles } from "./property-config-menu.style";
// Material-ui
import {
    Drawer,
    Divider,
    Toolbar,
    Tooltip,
    Tabs,
    Tab,
} from '@material-ui/core';
import {
    Edit as EditIcon,
    History as HistoryIcon
} from '@material-ui/icons';

// Interfaces
enum TAB_NAME {
    EDIT = 'Edit',
    HISTORY = 'History'
}

export const PropertyConfigMenu = (): JSX.Element => {
    const classes = useStyles();

    // Redux selectors
    const appPropertyConfig: TextAppPropertyState = useSelector((state: AllReducerState) => state.textAppProperty);

    // States
    const [selectedTabName, setSelectedTabName] = useState<TAB_NAME>(TAB_NAME.EDIT);
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const [selectedAppProperty, setSelectedAppProperty] = useState<TextAppProperty>(getSelectedAppProperty());

    // Methods
    function getSelectedAppProperty(): TextAppProperty {
        return appPropertyConfig.list.filter((appProperty: TextAppProperty) => appPropertyConfig.selected === appProperty.property)[0];
    };

    const selectedTabComponentRender = (tabName: TAB_NAME): JSX.Element => {
        switch (tabName) {
            case TAB_NAME.EDIT:
                return <PropertyConfigEditTab />

            case TAB_NAME.HISTORY:
                return <PropertyConfigHistoryTab />
        }
    };

    // Effects
    useEffect(() => {
        setSelectedTabName(TAB_NAME.EDIT);
        setSelectedTab(0);
    }, [selectedAppProperty.property]);

    useEffect(() => {
        setSelectedAppProperty(getSelectedAppProperty());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appPropertyConfig]);

    useEffect(() => {
        if (selectedAppProperty.propertySettingsHistory.length === 0) setSelectedTab(0);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedAppProperty.propertySettingsHistory]);

    return (
        <Drawer
            classes={{ paper: classes.drawerPaper }}
            className={classes.drawer}
            variant="permanent"
            anchor="right"
        >
            <Toolbar variant="dense" />
            <div className={classes.drawerContainer}>

                {/* Top menu */}

                <Tabs
                    value={selectedTab}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={(event: React.ChangeEvent<{}>, tabNumber: number) => setSelectedTab(tabNumber)}
                    aria-label="Abas de configuração de propriedades"
                >
                    <Tooltip
                        enterDelay={TOOLTIP_DELAY.SUB_MENU}
                        enterNextDelay={TOOLTIP_DELAY.SUB_MENU}
                        title="Editar propriedade"
                        arrow
                    >
                        <Tab
                            className={classes.tab}
                            icon={<EditIcon />}
                            aria-label="Editar propriedade"
                            onClick={() => setSelectedTabName(TAB_NAME.EDIT)}
                        />
                    </Tooltip>
                    <Tooltip
                        enterDelay={TOOLTIP_DELAY.SUB_MENU}
                        enterNextDelay={TOOLTIP_DELAY.SUB_MENU}
                        title={selectedAppProperty.propertySettingsHistory.length === 0 ? '' : "Histórico de alterações"}
                        arrow
                    >
                        <Tab
                            className={classes.tab}
                            icon={<HistoryIcon />}
                            aria-label="Histórico de alterações"
                            onClick={() => setSelectedTabName(TAB_NAME.HISTORY)}
                            disabled={selectedAppProperty.propertySettingsHistory.length === 0}
                        />
                    </Tooltip>
                </Tabs>

                <Divider />

                {/* Menu tab body */}
                {selectedTabComponentRender(selectedTabName)}
            </div>
        </Drawer>
    );
};
