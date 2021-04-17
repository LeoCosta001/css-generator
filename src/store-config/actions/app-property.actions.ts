import { PROPERTY_NAME } from '../../shared/models/property-name.model';
import { SelectAppPropertyAction, ToggleAppPropertyAction } from '../../shared/models/reducers/app-property-action.model';
import { store } from '../store';

export const actionAppProperty = {
    toggleAppProperty: (propertyName: PROPERTY_NAME) => {
        const toggleAppPropertyAction: ToggleAppPropertyAction = { type: 'TOGGLE_APP_PROPERTY', propertyName };
        store.dispatch(toggleAppPropertyAction);
    },

    selectAppProperty: (propertyName: PROPERTY_NAME) => {
        const selectAppPropertyAction: SelectAppPropertyAction = { type: 'SELECT_APP_PROPERTY', propertyName };
        store.dispatch(selectAppPropertyAction);
    },
};
