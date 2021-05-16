import { useSelector } from 'react-redux';
// Models
import { AllReducerState } from '../../models/reducers/all-reducer-state.model';
import { AllAppProperty } from '../../models/app/all-app-property.model';
// Material-ui
import {
    Box,
} from '@material-ui/core';

export const CssCode = (): JSX.Element => {
    // Redux selectors
    const appPropertyConfig: AllAppProperty[] = useSelector((state: AllReducerState) => [...state.textAppProperty.list]);

    return (
        <Box>
            {
                appPropertyConfig.map((appProperty: AllAppProperty) => {
                    if (appProperty.isActive) {
                        return Object.entries(appProperty.propertySettings).map((propertySettings: any) => (
                            <Box key={propertySettings[0]}>{propertySettings[1].syntax}</Box>
                        ));
                    }

                    return null;
                })
            }
        </Box>
    );
};
