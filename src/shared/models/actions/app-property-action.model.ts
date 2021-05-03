import { Action } from "redux";
// Models
import { AllPropertySettings } from "../property-config.model";
import { PROPERTY_NAME } from "../property-name.model";

export interface ToggleAppPropertyAction extends Action {
    type: 'TOGGLE_APP_PROPERTY';
    propertyName: PROPERTY_NAME;
}

export interface SelectAppPropertyAction extends Action {
    type: 'SELECT_APP_PROPERTY';
    propertyName: PROPERTY_NAME;
}

interface UpdateAppPropertySettingsInfo {
    propertyName: PROPERTY_NAME;
    newSettings: AllPropertySettings;
}

export interface UpdateAppPropertySettings extends Action {
    type: 'UPDATE_APP_PROPERTY_SETTINGS';
    data: UpdateAppPropertySettingsInfo;
}