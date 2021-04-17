// Models
import { SelectAppPropertyAction, ToggleAppPropertyAction } from '../../shared/models/reducers/app-property-action.model';
import { TextAppProperty, TextAppPropertyState } from '../../shared/models/reducers/text-app-property.model';
import { PROPERTY_NAME } from '../../shared/models/property-name.model';

// Interfaces
type TextAppActions = ToggleAppPropertyAction | SelectAppPropertyAction;

// Initial state
const INITIAL_STATE: TextAppPropertyState = {
    selected: PROPERTY_NAME.COLOR,
    list: [
        { property: PROPERTY_NAME.COLOR, description: 'Altera a cor dos caracteres', isActive: false, propertySettings: { [PROPERTY_NAME.COLOR]: null } },
        { property: PROPERTY_NAME.FONT_FAMILY, description: 'Define uma lista de prioridades em que diferentes fontes serão aplicadas', isActive: false, propertySettings: { [PROPERTY_NAME.FONT_FAMILY]: null } },
        { property: PROPERTY_NAME.FONT_SIZE, description: 'Altera o tamanho  dos caracteres', isActive: false, propertySettings: { [PROPERTY_NAME.FONT_SIZE]: null } },
        { property: PROPERTY_NAME.FONT_STRETCH, description: 'Altera o alongamento dos caracteres', isActive: false, propertySettings: { [PROPERTY_NAME.FONT_STRETCH]: null } },
        { property: PROPERTY_NAME.FONT_STYLE, description: 'Altera o estilo da fonte (negrito, itálico, etc...)', isActive: false, propertySettings: { [PROPERTY_NAME.FONT_STYLE]: null } },
        { property: PROPERTY_NAME.FONT_VARIANT, description: 'Esta é uma propriedade abreviada que possibilita aplicar diferentes variações na fonte', isActive: false, propertySettings: { [PROPERTY_NAME.FONT_VARIANT]: null } },
        { property: PROPERTY_NAME.FONT_WEIGHT, description: 'Altera a espessura dos caracteres', isActive: false, propertySettings: { [PROPERTY_NAME.FONT_WEIGHT]: null } },
        { property: PROPERTY_NAME.LETTER_SPACING, description: 'Altera o espaçamento entre os caracteres', isActive: false, propertySettings: { [PROPERTY_NAME.LETTER_SPACING]: null } },
        { property: PROPERTY_NAME.TEXT_SHADOW, description: 'Aplica sombra nos caracteres', isActive: false, propertySettings: { [PROPERTY_NAME.TEXT_SHADOW]: null } },
        { property: PROPERTY_NAME.WORD_SPACING, description: 'Altera o espaçamento entre as palavras', isActive: false, propertySettings: { [PROPERTY_NAME.WORD_SPACING]: null } }
    ]
};

// Reducer
export default function reducer(state: TextAppPropertyState = INITIAL_STATE, action: TextAppActions): TextAppPropertyState {
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
        case 'SELECT_APP_PROPERTY':
            return { ...state, selected: action.propertyName };

        default:
            return state;
    }
}
