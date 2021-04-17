import { PROPERTY_NAME } from '../../shared/models/property-name.model';
import { store } from '../store';

export const actionAppProperty = {
    toggleAppProperty: (propertyName: PROPERTY_NAME) => {
        store.dispatch({ type: 'TOGGLE_APP_PROPERTY', propertyName });
    }
};
