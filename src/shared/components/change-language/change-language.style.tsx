// Material
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            color: theme.palette.common.white,
        },

        buttonText: {
            fontSize: theme.typography.fontSize,
            margin: `0px ${theme.spacing(1)}px`
        },

        menuItem: {
            fontSize: theme.typography.fontSize
        }
    }),
);
