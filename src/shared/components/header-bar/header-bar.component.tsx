// Components
import { ToggleTheme } from '../toggle-theme/toggle-theme.component';
import { ChangeLanguage } from '../change-language/change-language.component';
//Style
import { useStyles } from './header-bar.style';
// Material-ui
import {
    AppBar,
    Toolbar,
    Box
} from '@material-ui/core';

export const HeaderBar = (): JSX.Element => {
    const classes = useStyles();

    return (
        <AppBar
            className={classes.appBar}
            position="absolute"
            elevation={1}
        >
            <Toolbar variant="dense">
                <Box className={classes.logo} component="h1">CSS GENERATOR</Box>
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
