// Constants
import { headerBarHeight, propertyConfigMenuWidth, propertySelectMenuWidth } from '../../constants/layout.constant';
// Material-ui
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: headerBarHeight
        },

        content: {
            paddingLeft: propertySelectMenuWidth,
            paddingRight: propertyConfigMenuWidth,
            flexGrow: 1
        },
    }),
);
