// Components
import { LoggedArea } from '../../shared/components/logged-area/logged-area.component';
import { PropertyConfigMenu } from '../../shared/components/property-config-menu/property-config-menu.component';
import { PropertySelectMenu } from '../../shared/components/property-select-menu/property-select-menu.component';
import { AppView } from './app-view/app-view.component';
import { AppViewMenu } from '../../shared/components/app-view-menu/app-view-menu.component';
// Material-ui
import {
    Box,
} from '@material-ui/core';

const AppPage = (): JSX.Element => {
    return (
        <LoggedArea>
            <>
                <PropertySelectMenu />
                <Box width="100%" flexDirection="column">
                    <AppView />
                    <AppViewMenu />
                </Box>
                <PropertyConfigMenu />
            </>
        </LoggedArea>
    );
};

export default AppPage
