// Material-ui
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// Constants
import { appResultHeight, headerBarHeight } from '../../../shared/constants/layout.constant';

const marginY = 40;

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appViewContainer: {
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: `calc(100vh - ${appResultHeight}px - ${headerBarHeight}px - ${marginY * 2}px)`,
            margin: `${marginY}px 100px`,
            [theme.breakpoints.down('md')]: {
                margin: `${marginY}px 40px`,
            },
            [theme.breakpoints.down('sm')]: {
                margin: `${marginY}px 20px`,
            }
        }
    }),
);
