import React from 'react';
// Components
import { LoggedArea } from '../../shared/components/logged-area/logged-area.component';
import PropertySelectMenu from '../../shared/components/propertie-select-menu/property-select-menu.component';
import { TextApp } from './text-app/text-app.component';

const AppPage = (): JSX.Element => {
    return (
        <LoggedArea>
            <>
                <PropertySelectMenu />
                <TextApp />
            </>
        </LoggedArea>
    )
}

export default AppPage
