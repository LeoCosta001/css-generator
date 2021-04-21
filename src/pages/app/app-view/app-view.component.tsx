// Components
import { TextApp } from "../text-app/text-app.component";
// Style
import { useStyles } from "./app-view.style";
// Material-ui
import {
    Box,
} from '@material-ui/core';

export const AppView = (): JSX.Element => {
    const classes = useStyles();

    return (
        <Box className={classes.appViewContainer} boxShadow={3}>
            <TextApp />
        </Box>
    );
};
