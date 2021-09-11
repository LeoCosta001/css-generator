import moment from 'moment';
// Translates
import { i18n } from '../../translate/i18n';
// Models
import { TextAppProperty, TextAppPropertyState } from '../../shared/models/app/text-app-property.model';
import { PROPERTY_NAME } from '../../shared/models/property-name.model';
import { getEmptyPropertyConfig } from '../../shared/models/empty-property-config.model';
import {
    ResetAllAppPropertyAction,
    ResetAppPropertyAction,
    SelectAppPropertyAction,
    ToggleAppPropertyAction,
    UndoChangeAppPropertyAction,
    UpdateAppPropertySettings
} from '../../shared/models/actions/app-property-action.model';
// Interfaces
type TextAppActions = ToggleAppPropertyAction | SelectAppPropertyAction | UpdateAppPropertySettings | ResetAllAppPropertyAction | ResetAppPropertyAction | UndoChangeAppPropertyAction;

// Initial state
const INITIAL_STATE: TextAppPropertyState = {
    selected: PROPERTY_NAME.COLOR,
    list: [
        {
            property: PROPERTY_NAME.COLOR,
            description: i18n.t('redux.property.color.description'),
            isActive: false,
            propertySettings: { [PROPERTY_NAME.COLOR]: null },
            propertySettingsHistory: []
        },
        {
            property: PROPERTY_NAME.FONT_FAMILY,
            description: i18n.t('redux.property.fontFamily.description'),
            isActive: false,
            propertySettings: { [PROPERTY_NAME.FONT_FAMILY]: null },
            propertySettingsHistory: []
        },
        {
            property: PROPERTY_NAME.FONT_SIZE,
            description: i18n.t('redux.property.fontSize.description'),
            isActive: false,
            propertySettings: { [PROPERTY_NAME.FONT_SIZE]: null },
            propertySettingsHistory: []
        },
        {
            property: PROPERTY_NAME.FONT_STRETCH,
            description: i18n.t('redux.property.fontStretch.description'),
            isActive: false,
            propertySettings: { [PROPERTY_NAME.FONT_STRETCH]: null },
            propertySettingsHistory: []
        },
        {
            property: PROPERTY_NAME.FONT_STYLE,
            description: i18n.t('redux.property.fontStyle.description'),
            isActive: false,
            propertySettings: { [PROPERTY_NAME.FONT_STYLE]: null },
            propertySettingsHistory: []
        },
        {
            property: PROPERTY_NAME.FONT_VARIANT,
            description: i18n.t('redux.property.fontVariant.description'),
            isActive: false,
            propertySettings: { [PROPERTY_NAME.FONT_VARIANT]: null },
            propertySettingsHistory: []
        },
        {
            property: PROPERTY_NAME.FONT_WEIGHT,
            description: i18n.t('redux.property.fontWeight.description'),
            isActive: false,
            propertySettings: { [PROPERTY_NAME.FONT_WEIGHT]: null },
            propertySettingsHistory: []
        },
        {
            property: PROPERTY_NAME.LETTER_SPACING,
            description: i18n.t('redux.property.letterSpacing.description'),
            isActive: false,
            propertySettings: { [PROPERTY_NAME.LETTER_SPACING]: null },
            propertySettingsHistory: []
        },
        {
            property: PROPERTY_NAME.TEXT_SHADOW,
            description: i18n.t('redux.property.textShadow.description'),
            isActive: false,
            propertySettings: { [PROPERTY_NAME.TEXT_SHADOW]: null },
            propertySettingsHistory: []
        },
        {
            property: PROPERTY_NAME.WORD_SPACING,
            description: i18n.t('redux.property.wordSpacing.description'),
            isActive: false,
            propertySettings: { [PROPERTY_NAME.WORD_SPACING]: null },
            propertySettingsHistory: []
        }
    ]
};

// Reducer
export default function reducer(state: TextAppPropertyState = INITIAL_STATE, action: TextAppActions): TextAppPropertyState {
    switch (action.type) {
        case 'TOGGLE_APP_PROPERTY':
            const toggleAppProperty = state.list.map((textProperty: TextAppProperty) => {
                if (textProperty.property === action.propertyName) {
                    return {
                        ...textProperty,
                        isActive: !textProperty.isActive,
                        propertySettings: { [action.propertyName]: !textProperty.isActive ? getEmptyPropertyConfig[action.propertyName] : null },
                        propertySettingsHistory: []
                    };
                }

                return textProperty;
            });

            return {
                ...state,
                list: toggleAppProperty
            };

        case 'SELECT_APP_PROPERTY':
            return { ...state, selected: action.propertyName };

        case 'UPDATE_APP_PROPERTY_SETTINGS':
            const updateAppPropertySettings = state.list.map((textProperty: TextAppProperty) => {
                if (textProperty.property === action.data.propertyName) {
                    return {
                        ...textProperty,
                        propertySettings: { [action.data.propertyName]: action.data.newSettings },
                        propertySettingsHistory: [
                            ...(textProperty.propertySettingsHistory[0]?.propertySyntax !== action.data.newSettings.syntax ?
                                [
                                    {
                                        propertyName: action.data.propertyName,
                                        propertySettings: action.data.newSettings,
                                        propertySyntax: action.data.newSettings.syntax,
                                        time: moment()
                                    }
                                ]
                            : []),
                            ...textProperty.propertySettingsHistory
                        ]
                    };
                }

                return textProperty;
            });

            return {
                ...state,
                list: updateAppPropertySettings
            };

        case 'UNDO_CHANGE_APP_PROPERTY':
            const undoChangeAppProperty = state.list.map((textProperty: TextAppProperty) => {
                const newPropertySettingsHistory = textProperty.propertySettingsHistory.slice(1, textProperty.propertySettingsHistory.length);

                if (textProperty.property === action.propertyName && newPropertySettingsHistory.length > 0) {
                    return {
                        ...textProperty,
                        propertySettings: { [action.propertyName]: newPropertySettingsHistory[0].propertySettings },
                        propertySettingsHistory: [
                            ...newPropertySettingsHistory
                        ]
                    };
                }

                return textProperty;
            });

            return {
                ...state,
                list: undoChangeAppProperty
            };

        case 'RESET_ALL_APP_PROPERTY':
            return INITIAL_STATE;

        case 'RESET_APP_PROPERTY':
            const resetAppProperty = state.list.map((textProperty: TextAppProperty) => {
                if (textProperty.property === action.propertyName) {
                    return {
                        ...textProperty,
                        propertySettings: { [action.propertyName]: textProperty.propertySettingsHistory[textProperty.propertySettingsHistory.length - 1].propertySettings },
                        propertySettingsHistory: [
                            textProperty.propertySettingsHistory[textProperty.propertySettingsHistory.length - 1]
                        ]
                    };
                }

                return textProperty;
            });

            return {
                ...state,
                list: resetAppProperty
            };

        default:
            return state;
    }
}
