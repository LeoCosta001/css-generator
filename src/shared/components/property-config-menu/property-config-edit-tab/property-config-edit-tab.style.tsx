// Constants
import { headerBarHeight, drawerMenuItemHeight } from '../../../constants/layout.constant';
// Material-ui
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolBar: {
            justifyContent: 'space-around'
        },

        iconHover: {
            "&:hover": {
                color: theme.palette.primary.main
            }
        },

        list: {
            padding: 0
        },

        configMenuContainer: { 
            display: 'flex',
            minHeight: `calc(100vh - ${headerBarHeight}px - ${drawerMenuItemHeight}px)`,
            flexDirection: 'column',
            justifyContent: 'space-between'
        }
    }),
);
