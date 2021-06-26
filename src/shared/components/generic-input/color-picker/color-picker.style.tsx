// Material-ui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        gridContainer: {
            display: 'flex',
            alignItems: 'center'
        },

        selectColorButton: {
            height: theme.spacing(3),
            width: theme.spacing(3),
            border: `solid 1px ${theme.palette.divider}`,
            borderRadius: theme.spacing(0.5),
            cursor: 'pointer'
        },

        popover: {
            marginTop: theme.spacing(1)
        }
    })
);
