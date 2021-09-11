import { useHistory } from 'react-router-dom';
// Translates
import { i18n } from '../../../translate/i18n';
// Components
import { ToggleTheme } from '../toggle-theme/toggle-theme.component';
import { ChangeLanguage } from '../change-language/change-language.component';
//Style
import { useStyles } from './header-bar.style';
// Material-ui
import {
    AppBar,
    Toolbar,
    Box,
    IconButton
} from '@material-ui/core';
import {
    ArrowBack as ArrowBackIcon
} from '@material-ui/icons';

export const HeaderBar = (): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <AppBar
            className={classes.appBar}
            position="absolute"
            elevation={1}
        >
            <Toolbar variant="dense">
                <IconButton
                    color="inherit"
                    size="small"
                    aria-label={i18n.t('button.goBackPage.ariaLabel')}
                    edge="start"
                    className={classes.menuButton}
                    onClick={() => history.push('/')}
                >
                    <ArrowBackIcon />
                </IconButton>
                <Box display="flex" flexDirection="row-reverse" flex="auto">
                    <ToggleTheme />
                    <Box mr={2}>
                        <ChangeLanguage />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar >
    );
}
