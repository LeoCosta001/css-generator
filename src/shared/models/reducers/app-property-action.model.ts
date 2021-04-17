import { Action } from "redux";
import { PROPERTY_NAME } from "../property-name.model";

export interface ToggleAppPropertyAction extends Action {
    type: 'TOGGLE_APP_PROPERTY';
    propertyName: PROPERTY_NAME;
}

export interface SelectAppPropertyAction extends Action {
    type: 'SELECT_APP_PROPERTY';
    propertyName: PROPERTY_NAME;
}
