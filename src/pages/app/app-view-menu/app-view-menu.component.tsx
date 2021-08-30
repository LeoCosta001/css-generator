import React, { useState } from "react";
// Translates
import { i18n } from "../../../translate/i18n";
// Components
import { CssCode } from "../../../shared/components/css-code/css-code.component";
import { TextViewEdit } from "../../../shared/components/text-view-edit/text-view-edit.component";
// Style
import { useStyles } from "./app-view-menu.style";
// Material-ui
import {
    Box,
    Paper,
    Tabs,
    Tab
} from '@material-ui/core';

// Interfaces
enum TAB_NAME {
    RESULT_OF_CSS_CODE = 'Result of css code',
    EDIT_APP_VIEW_TEXT = 'Edit app view text'
}

export const AppViewMenu = (): JSX.Element => {
    const classes = useStyles();

    // States
    const [selectedTabName, setSelectedTabName] = useState<TAB_NAME>(TAB_NAME.RESULT_OF_CSS_CODE);
    const [selectedTab, setSelectedTab] = useState<number>(0);

    // Methods
    const selectedTabComponentRender = (tabName: TAB_NAME): JSX.Element => {
        switch (tabName) {
            case TAB_NAME.RESULT_OF_CSS_CODE:
                return <CssCode />

            case TAB_NAME.EDIT_APP_VIEW_TEXT:
                return <TextViewEdit />
        }
    }

    return (
        <Box className={classes.appViewMenuContainer} boxShadow={3}>
            <Paper square>
                <Tabs
                    value={selectedTab}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={(event: React.ChangeEvent<{}>, tabNumber: number) => setSelectedTab(tabNumber)}
                >
                    <Tab
                        label={i18n.t('tab.appViewMenu.cssCode.label')}
                        aria-label={i18n.t('tab.appViewMenu.cssCode.ariaLabel')}
                        onClick={() => setSelectedTabName(TAB_NAME.RESULT_OF_CSS_CODE)}
                    />
                    <Tab
                        label={i18n.t('tab.appViewMenu.textEdit.label')}
                        aria-label={i18n.t('tab.appViewMenu.textEdit.ariaLabel')}
                        onClick={() => setSelectedTabName(TAB_NAME.EDIT_APP_VIEW_TEXT)}
                    />
                </Tabs>
            </Paper>

            {/* Menu tab body */}

            <Box p={1}>
                {selectedTabComponentRender(selectedTabName)}
            </Box>
        </Box>
    );
};
