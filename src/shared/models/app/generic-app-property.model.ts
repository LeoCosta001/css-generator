// Models
import { PROPERTY_NAME } from '../property-name.model';

export interface GenericAppProperty {
    property: PROPERTY_NAME;
    description: string;
    isActive: boolean;
    propertySettings: any;
}

export interface GenericAppPropertyState {
    selected: PROPERTY_NAME;
    list: GenericAppProperty[];
}
