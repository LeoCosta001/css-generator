// Constants
import { appResultHeight } from '../../constants/layout.constant';
// Material-ui
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appViewMenuContainer: {
            backgroundColor: theme.palette.background.paper,
            width: '100%',
            height: appResultHeight
        }
    }),
);
