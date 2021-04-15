// Constants
import { propertySelectMenuWidth, headerBarHeight } from '../../constants/layout.constants';
// Material-ui
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawerPaper: {
            width: propertySelectMenuWidth,
            marginTop: headerBarHeight
        },

        toolBar: {
            justifyContent: 'space-between'
        },

        iconHover: {
            "&:hover": {
                color: theme.palette.secondary.main,
            }
        }
    }),
);
