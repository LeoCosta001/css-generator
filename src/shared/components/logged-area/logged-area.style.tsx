// Constants
import { headerBarHeight, propertyConfigMenuWidth, propertySelectMenuWidth } from '../../constants/layout.constant';
// Material-ui
import {
    makeStyles,
    Theme,
    createStyles
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: headerBarHeight
        },

        content: {
            paddingLeft: propertySelectMenuWidth + theme.spacing(1),
            paddingRight: propertyConfigMenuWidth + theme.spacing(1),
            flexGrow: 1,
            padding: theme.spacing(1),
        },
    }),
);
