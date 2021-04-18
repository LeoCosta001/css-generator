import { useContext } from 'react';
// Constants
import { TOOLTIP_DELAY } from '../../constants/delay.constant';
// Components
import { ThemeContext } from '../theme-provider/theme-provider';
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
            title={theme === "dark" ? "Modo claro" : "Modo escuro"}
            arrow
        >
            <IconButton
                color="inherit"
                size="small"
                aria-label="Alternar tema claro/escuro"
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
