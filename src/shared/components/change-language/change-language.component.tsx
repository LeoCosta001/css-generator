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
        <Tooltip title="Mudar idioma" arrow>
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
