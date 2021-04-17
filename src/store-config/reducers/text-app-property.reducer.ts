// Models
import { TextAppProperty, TextAppPropertyState, ToggleAppPropertyAction } from '../../shared/models/reducers/text-app-property.model';
import { PROPERTY_NAME } from '../../shared/models/property-name.model';

// Interfaces
export type TextAppAction = ToggleAppPropertyAction;

// Initial state
const INITIAL_STATE: TextAppPropertyState = {
    selected: null,
    list: [
        { name: 'Cor', property: PROPERTY_NAME.COLOR, isActive: false, propertySettings: { [PROPERTY_NAME.COLOR]: null } },
        { name: 'Familia', property: PROPERTY_NAME.FONT_FAMILY, isActive: false, propertySettings: { [PROPERTY_NAME.FONT_FAMILY]: null } },
        { name: 'Tamanho', property: PROPERTY_NAME.FONT_SIZE, isActive: false, propertySettings: { [PROPERTY_NAME.FONT_SIZE]: null } },
        { name: 'Alongamento', property: PROPERTY_NAME.FONT_STRETCH, isActive: false, propertySettings: { [PROPERTY_NAME.FONT_STRETCH]: null } },
        { name: 'Estilo', property: PROPERTY_NAME.FONT_STYLE, isActive: false, propertySettings: { [PROPERTY_NAME.FONT_STYLE]: null } },
        { name: 'Variante', property: PROPERTY_NAME.FONT_VARIANT, isActive: false, propertySettings: { [PROPERTY_NAME.FONT_VARIANT]: null } },
        { name: 'Espessura', property: PROPERTY_NAME.FONT_WEIGHT, isActive: false, propertySettings: { [PROPERTY_NAME.FONT_WEIGHT]: null } },
        { name: 'Espaço entre letras', property: PROPERTY_NAME.LETTER_SPACING, isActive: false, propertySettings: { [PROPERTY_NAME.LETTER_SPACING]: null } },
        { name: 'Sombra', property: PROPERTY_NAME.TEXT_SHADOW, isActive: false, propertySettings: { [PROPERTY_NAME.TEXT_SHADOW]: null } },
        { name: 'Espaço entre palavras', property: PROPERTY_NAME.WORD_SPACING, isActive: false, propertySettings: { [PROPERTY_NAME.WORD_SPACING]: null } }
    ]
};

// Reducer
export default function reducer(state: TextAppPropertyState = INITIAL_STATE, action: TextAppAction): TextAppPropertyState {
    switch (action.type) {
        case 'TOGGLE_APP_PROPERTY':
            const toggleAppProperty = state.list.map((item: TextAppProperty) => {
                if (item.property === action.propertyName) {
                    return {
                        ...item,
                        isActive: !item.isActive
                    };
                }

                return item;
            });

            return {
                ...state,
                list: toggleAppProperty
            };
        default:
            return state;
    }
}
