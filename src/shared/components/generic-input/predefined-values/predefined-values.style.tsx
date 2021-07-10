// Material-ui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listItemIcon: {
            minWidth: theme.spacing(4)
        },

        colorIndicator: {
            width: theme.spacing(1.70),
            height: theme.spacing(1.70),
            borderRadius: 45
        }
    })
);
