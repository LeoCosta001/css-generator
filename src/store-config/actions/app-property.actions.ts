import { store } from '../store';
// Models
import { AllPropertySettings } from '../../shared/models/property-config.model';
import { PROPERTY_NAME } from '../../shared/models/property-name.model';
import {
    SelectAppPropertyAction,
    ToggleAppPropertyAction,
    UpdateAppPropertySettings,
    UndoChangeAppPropertyAction,
    ResetAllAppPropertyAction,
    ResetAppPropertyAction
} from '../../shared/models/actions/app-property-action.model';

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
    },

    undoChangeAppProperty: (propertyName: PROPERTY_NAME) => {
        const updateAppPropertySettingsAction: UndoChangeAppPropertyAction = { type: 'UNDO_CHANGE_APP_PROPERTY', propertyName };
        store.dispatch(updateAppPropertySettingsAction);
    },

    resetAllAppProperty: () => {
        const updateAppPropertySettingsAction: ResetAllAppPropertyAction = { type: 'RESET_ALL_APP_PROPERTY' };
        store.dispatch(updateAppPropertySettingsAction);
    },

    resetAppProperty: (propertyName: PROPERTY_NAME) => {
        const updateAppPropertySettingsAction: ResetAppPropertyAction = { type: 'RESET_APP_PROPERTY', propertyName };
        store.dispatch(updateAppPropertySettingsAction);
    }
};
