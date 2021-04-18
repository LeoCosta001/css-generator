// Components
import { LoggedArea } from '../../shared/components/logged-area/logged-area.component';
import { PropertyConfigMenu } from '../../shared/components/property-config-menu/property-config-menu.component';
import { PropertySelectMenu } from '../../shared/components/property-select-menu/property-select-menu.component';
import { TextApp } from './text-app/text-app.component';

const AppPage = (): JSX.Element => {
    return (
        <LoggedArea>
            <>
                <PropertySelectMenu />
                <TextApp />
                <PropertyConfigMenu />
            </>
        </LoggedArea>
    )
}

export default AppPage
