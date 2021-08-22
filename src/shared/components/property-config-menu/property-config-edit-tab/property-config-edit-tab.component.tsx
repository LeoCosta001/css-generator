import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// Redux
import { actionAppProperty } from '../../../../store-config/actions/app-property.actions';
// Constants
import { TOOLTIP_DELAY } from '../../../constants/delay.constant';
// Components
import { PropertyConfigItem } from '../property-config-item/property-config-item.component';
import { ColorConfig } from '../../property-config/color/color.component';
import { FontFamilyConfig } from '../../property-config/font-family/font-family.component';
import { FontSizeConfig } from '../../property-config/font-size/font-size.component';
import { FontStretchConfig } from '../../property-config/font-stretch/font-stretch.component';
import { FontWeightConfig } from '../../property-config/font-weight/font-weight.component';
import { FontStyleConfig } from '../../property-config/font-style/font-style.component';
import { FontVariantConfig } from '../../property-config/font-variant/font-variant.component';
import { LetterSpacingConfig } from '../../property-config/letter-spacing/letter-spacing.component';
import { TextShadowConfig } from '../../property-config/text-shadow/text-shadow.component';
import { WordSpacingConfig } from '../../property-config/word-spacing/word-spacing.component';
// Models
import { TextAppProperty, TextAppPropertyState } from '../../../models/app/text-app-property.model';
import { AllReducerState } from '../../../models/reducers/all-reducer-state.model';
import { PROPERTY_NAME } from '../../../models/property-name.model';
import {
    AllPropertySettings,
    ColorProperty,
    FontFamilyProperty,
    FontSizeProperty,
    FontStretchProperty,
    FontStyleProperty,
    FontVariantProperty,
    FontWeightProperty,
    LetterSpacingProperty,
    TextShadowProperty,
    WordSpacingProperty
} from '../../../models/property-config.model';
// Style
import { useStyles } from "./property-config-edit-tab.style";
// Material-ui
import {
    List,
    Divider,
    Toolbar,
    IconButton,
    Tooltip,
    Box
} from '@material-ui/core';
import {
    Undo as UndoIcon,
    Tune as TuneIcon
} from '@material-ui/icons';

export const PropertyConfigEditTab = (): JSX.Element => {
    const classes = useStyles();

    // Redux selectors
    const appPropertyConfig: TextAppPropertyState = useSelector((state: AllReducerState) => state.textAppProperty);

    // States 
    const [selectedAppProperty, setSelectedAppProperty] = useState<TextAppProperty>(getSelectedAppProperty());

    // Methods
    function getSelectedAppProperty(): TextAppProperty {
        return appPropertyConfig.list.filter((appProperty: TextAppProperty) => appPropertyConfig.selected === appProperty.property)[0];
    }

    const updatePropertySettings = (propertyName: PROPERTY_NAME, newPropertySettings: AllPropertySettings) => {
        actionAppProperty.updateAppPropertySettings(propertyName, newPropertySettings)
    }

    const undoChangeAppProperty = (propertyName: PROPERTY_NAME) => {
        actionAppProperty.undoChangeAppProperty(propertyName);
        setSelectedAppProperty(getSelectedAppProperty());
    }

    const getPropertyConfigRender = (propertyName: PROPERTY_NAME): JSX.Element => {
        switch (propertyName) {
            case PROPERTY_NAME.COLOR:
                if (selectedAppProperty.isActive) return (
                    <ColorConfig
                        propertySettings={(selectedAppProperty.propertySettings['color'] as ColorProperty)}
                        updatePropertySettings={updatePropertySettings}
                    />);
                break;

            case PROPERTY_NAME.FONT_FAMILY:
                if (selectedAppProperty.isActive) return (
                    <FontFamilyConfig
                        propertySettings={(selectedAppProperty.propertySettings['font-family'] as FontFamilyProperty)}
                        updatePropertySettings={updatePropertySettings}
                    />);
                break;

            case PROPERTY_NAME.FONT_SIZE:
                if (selectedAppProperty.isActive) return (
                    <FontSizeConfig
                        propertySettings={(selectedAppProperty.propertySettings['font-size'] as FontSizeProperty)}
                        updatePropertySettings={updatePropertySettings}
                    />);
                break;

            case PROPERTY_NAME.FONT_STRETCH:
                if (selectedAppProperty.isActive) return (
                    <FontStretchConfig
                        propertySettings={(selectedAppProperty.propertySettings['font-stretch'] as FontStretchProperty)}
                        updatePropertySettings={updatePropertySettings}
                    />);
                break;

            case PROPERTY_NAME.FONT_WEIGHT:
                if (selectedAppProperty.isActive) return (
                    <FontWeightConfig
                        propertySettings={(selectedAppProperty.propertySettings['font-weight'] as FontWeightProperty)}
                        updatePropertySettings={updatePropertySettings}
                    />);
                break;

            case PROPERTY_NAME.FONT_STYLE:
                if (selectedAppProperty.isActive) return (
                    <FontStyleConfig
                        propertySettings={(selectedAppProperty.propertySettings['font-style'] as FontStyleProperty)}
                        updatePropertySettings={updatePropertySettings}
                    />);
                break;

            case PROPERTY_NAME.FONT_VARIANT:
                if (selectedAppProperty.isActive) return (
                    <FontVariantConfig
                        propertySettings={(selectedAppProperty.propertySettings['font-variant'] as FontVariantProperty)}
                        updatePropertySettings={updatePropertySettings}
                    />);
                break;

            case PROPERTY_NAME.LETTER_SPACING:
                if (selectedAppProperty.isActive) return (
                    <LetterSpacingConfig
                        propertySettings={(selectedAppProperty.propertySettings['letter-spacing'] as LetterSpacingProperty)}
                        updatePropertySettings={updatePropertySettings}
                    />);
                break;

            case PROPERTY_NAME.TEXT_SHADOW:
                if (selectedAppProperty.isActive) return (
                    <TextShadowConfig
                        propertySettings={(selectedAppProperty.propertySettings['text-shadow'] as TextShadowProperty)}
                        updatePropertySettings={updatePropertySettings}
                    />);
                break;

            case PROPERTY_NAME.WORD_SPACING:
                if (selectedAppProperty.isActive) return (
                    <WordSpacingConfig
                        propertySettings={(selectedAppProperty.propertySettings['word-spacing'] as WordSpacingProperty)}
                        updatePropertySettings={updatePropertySettings}
                    />);
                break;

            default:
                return (
                    <>
                        <PropertyConfigItem title="Teste">
                            <>
                                <Box>{selectedAppProperty.property}</Box>
                                <Box fontStyle="bold">Em breve...</Box>
                            </>
                        </PropertyConfigItem>
                        <Divider />
                    </>
                )
        }

        return (
            <>
                <PropertyConfigItem>
                    <Box textAlign="center">Propriedade desativada.</Box>
                </PropertyConfigItem>
                <Divider />
            </>
        )
    }

    // Effects
    useEffect(() => {
        setSelectedAppProperty(getSelectedAppProperty());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appPropertyConfig]);

    return (
        <Box className={classes.configMenuContainer}>
            {/* Property config */}
            <List className={classes.list}>
                {getPropertyConfigRender(selectedAppProperty.property)}
            </List>

            {/* Footer */}
            <Box>
                <Divider />

                <Toolbar variant="dense" className={classes.toolBar}>
                    <Tooltip
                        placement="top"
                        enterDelay={TOOLTIP_DELAY.SUB_MENU}
                        enterNextDelay={TOOLTIP_DELAY.SUB_MENU}
                        title="Desfazer a ultima alteração"
                        arrow
                    >
                        <IconButton
                            classes={{ root: classes.iconHover }}
                            color="default"
                            size="small"
                            aria-label="Desfazer a ultima alteração"
                            onClick={() => undoChangeAppProperty(selectedAppProperty.property)}
                        >
                            <UndoIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip
                        placement="top"
                        enterDelay={TOOLTIP_DELAY.SUB_MENU}
                        enterNextDelay={TOOLTIP_DELAY.SUB_MENU}
                        title="Voltar aos valores padrão"
                        arrow
                    >
                        <IconButton
                            classes={{ root: classes.iconHover }}
                            color="default"
                            size="small"
                            aria-label="Voltar aos valores padrão"
                            onClick={() => alert('Em breve!')}
                        >
                            <TuneIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </Box>
        </Box>
    );
};
