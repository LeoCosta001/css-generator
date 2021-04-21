import { useState } from 'react';
// Constants
import { TOOLTIP_DELAY } from '../../constants/delay.constant';
// Components
import { PropertyConfigEditTab } from './property-config-edit-tab/property-config-edit-tab.component';
import { PropertyConfigHistoryTab } from './property-config-history-tab/property-config-history-tab.component';
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

    // States
    const [selectedTabName, setSelectedTabName] = useState<TAB_NAME>(TAB_NAME.EDIT);
    const [selectedTab, setSelectedTab] = useState<number>(0);

    // Methods
    const selectedTabComponentRender = (tabName: TAB_NAME): JSX.Element => {
        switch (tabName) {
            case TAB_NAME.EDIT:
                return <PropertyConfigEditTab />

            case TAB_NAME.HISTORY:
                return <PropertyConfigHistoryTab />
        }
    }

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
                    <Tooltip enterDelay={TOOLTIP_DELAY.SUB_MENU} enterNextDelay={TOOLTIP_DELAY.SUB_MENU} title="Editar propriedade" arrow>
                        <Tab
                            className={classes.tab}
                            icon={<EditIcon />}
                            aria-label="Editar propriedade"
                            onClick={() => setSelectedTabName(TAB_NAME.EDIT)}
                        />
                    </Tooltip>
                    <Tooltip enterDelay={TOOLTIP_DELAY.SUB_MENU} enterNextDelay={TOOLTIP_DELAY.SUB_MENU} title="Histórico de alterações" arrow>
                        <Tab
                            className={classes.tab}
                            icon={<HistoryIcon />}
                            aria-label="Histórico de alterações"
                            onClick={() => setSelectedTabName(TAB_NAME.HISTORY)}
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
