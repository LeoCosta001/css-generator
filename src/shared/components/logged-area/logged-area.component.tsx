// Components
import { HeaderBar } from '../header-bar/header-bar.component';
// Styles
import { useStyles } from "./logged-area.style";
// Material-ui
import {
    Grid,
    Box
} from '@material-ui/core';

// Interfaces
interface LoggedAreaProps {
    children: JSX.Element;
}

export const LoggedArea = (props: LoggedAreaProps): JSX.Element => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <HeaderBar />
            <section
                className={classes.content}
            >
                <Grid container>
                    {props.children}
                </Grid>
            </section>
        </Box>
    );
};
