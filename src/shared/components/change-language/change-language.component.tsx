import React from 'react';
// Constants
import { TOOLTIP_DELAY } from '../../constants/delay.constant';
// Providers
import { LANGUAGE_LIST, useLanguage } from '../language-provider/language-provider';
// Translates
import { i18n } from '../../../translate/i18n';
// Style
import { useStyles } from './change-language.style';
// Material-ui
import {
    Box,
    Button,
    Tooltip,
    Menu,
    MenuItem
} from '@material-ui/core';
import {
    Translate as TranslateIcon,
    ExpandMoreRounded as ExpandMoreRoundedIcon
} from '@material-ui/icons';

export const ChangeLanguage = (): JSX.Element => {
    const languageProvider = useLanguage();
    const classes = useStyles();

    // States
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    // Methods
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Tooltip
                enterDelay={TOOLTIP_DELAY.HEADER_BAR}
                enterNextDelay={TOOLTIP_DELAY.HEADER_BAR}
                title={(i18n.t('button.currentLanguage.tooltip') as string)}
                arrow
            >
                <Button
                    className={classes.button}
                    aria-controls="change-language-button"
                    size="small"
                    aria-label={i18n.t('button.currentLanguage.ariaLabel')}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <TranslateIcon />
                    <Box className={classes.buttonText}>{i18n.t('button.currentLanguage.name')}</Box>
                    <ExpandMoreRoundedIcon />
                </Button>
            </Tooltip>
            <Menu
                id="change-language-button"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                keepMounted
            >
                <MenuItem
                    className={classes.menuItem}
                    onClick={() => languageProvider.updateCurrentLanguage(LANGUAGE_LIST.PT_BR)}
                    selected={languageProvider.getCurrentLanguage === LANGUAGE_LIST.PT_BR}
                >
                    PORTUGUÊS
                </MenuItem>
                <MenuItem
                    className={classes.menuItem}
                    onClick={() => languageProvider.updateCurrentLanguage(LANGUAGE_LIST.EN_US)}
                    selected={languageProvider.getCurrentLanguage === LANGUAGE_LIST.EN_US}
                >
                    ENGLISH
                </MenuItem>
            </Menu>
        </>
    );
};
