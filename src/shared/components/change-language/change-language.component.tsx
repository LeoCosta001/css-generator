// Constants
import { TOOLTIP_DELAY } from '../../constants/delay.constant';
// Material-ui
import {
    IconButton,
    Tooltip
} from '@material-ui/core';
import {
    Translate as TranslateIcon
} from '@material-ui/icons';

export const ChangeLanguage = (): JSX.Element => {
    return (
        <Tooltip
            enterDelay={TOOLTIP_DELAY.HEADER_BAR}
            enterNextDelay={TOOLTIP_DELAY.HEADER_BAR}
            title="Mudar idioma"
            arrow
        >
            <IconButton
                color="inherit"
                size="small"
                aria-label="Alternar tema claro/escuro"
                onClick={() => alert('Em breve!')}
            >
                <TranslateIcon />
            </IconButton>
        </Tooltip>
    );
};
