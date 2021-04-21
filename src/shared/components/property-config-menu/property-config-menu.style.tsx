// Constants
import { propertyConfigMenuWidth } from '../../constants/layout.constant';
// Material-ui
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawerContainer: {
            overflowY: 'auto',
            overflowX: 'hidden'
        },

        drawer: {
            width: propertyConfigMenuWidth,
            flexShrink: 0
        },

        drawerPaper: {
            width: propertyConfigMenuWidth
        },

        tab: {
            minWidth: '50%',

            "&:hover": {
                color: theme.palette.primary.main
            }
        }
    }),
);
