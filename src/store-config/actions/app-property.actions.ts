import { store } from '../store';
// Models
import { AllPropertySettings } from '../../shared/models/property-config.model';
import { PROPERTY_NAME } from '../../shared/models/property-name.model';
import { SelectAppPropertyAction, ToggleAppPropertyAction, UpdateAppPropertySettings } from '../../shared/models/actions/app-property-action.model';

export const actionAppProperty = {
    toggleAppProperty: (propertyName: PROPERTY_NAME) => {
        const toggleAppPropertyAction: ToggleAppPropertyAction = { type: 'TOGGLE_APP_PROPERTY', propertyName };
        store.dispatch(toggleAppPropertyAction);
    },

    selectAppProperty: (propertyName: PROPERTY_NAME) => {
        const selectAppPropertyAction: SelectAppPropertyAction = { type: 'SELECT_APP_PROPERTY', propertyName };
        store.dispatch(selectAppPropertyAction);
    },

    updateAppPropertySettings: (propertyName: PROPERTY_NAME, newSettings: AllPropertySettings) => {
        const updateAppPropertySettingsAction: UpdateAppPropertySettings = { type: 'UPDATE_APP_PROPERTY_SETTINGS', data: { propertyName, newSettings } };
        store.dispatch(updateAppPropertySettingsAction);
    }
};
