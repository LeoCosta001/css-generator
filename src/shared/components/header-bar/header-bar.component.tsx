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
    Menu as MenuIcon
} from '@material-ui/icons';

export const HeaderBar = (): JSX.Element => {
    const classes = useStyles();

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
                    aria-label="Abrir Menu"
                    edge="start"
                    className={classes.menuButton}
                    onClick={() => alert('Em breve!')}
                >
                    <MenuIcon />
                </IconButton>
                <Box display="flex" flexDirection="row-reverse" flex="auto">
                    <ToggleTheme />
                    <Box mr={1}>
                        <ChangeLanguage />
                    </Box>
                </Box>
            </Toolbar>
        </AppBar >
    );
}
