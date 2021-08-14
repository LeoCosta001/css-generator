// Material-ui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        hoverEffect: {
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: theme.palette.action.hover
            }
        }
    })
);
