import { useContext } from 'react';
// Constants
import { TOOLTIP_DELAY } from '../../constants/delay.constant';
// Components
import { ThemeContext } from '../theme-provider/theme-provider';
// Translates
import { i18n } from '../../../translate/i18n';
// Material-ui
import {
    IconButton,
    Tooltip
} from '@material-ui/core';
import {
    Brightness4,
    BrightnessHigh
} from '@material-ui/icons';

export const ToggleTheme = (): JSX.Element => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Tooltip
            enterDelay={TOOLTIP_DELAY.HEADER_BAR}
            enterNextDelay={TOOLTIP_DELAY.HEADER_BAR}
            title={
                theme === "dark" ?
                    (i18n.t('button.toggleTheme.tooltip.lightTheme') as string) :
                    (i18n.t('button.toggleTheme.tooltip.darkTheme') as string)
            }
            arrow
        >
            <IconButton
                color="inherit"
                size="small"
                aria-label={i18n.t('button.toggleTheme.ariaLabel')}
                onClick={toggleTheme}
            >
                {
                    theme === "dark" ?
                        <BrightnessHigh></BrightnessHigh> :
                        <Brightness4></Brightness4>
                }
            </IconButton>
        </Tooltip>
    );
};
