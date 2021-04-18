// Constants
import { propertySelectMenuWidth } from '../../constants/layout.constant';
// Material-ui
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawerContainer: {
            overflow: 'auto'
        },

        drawer: {
            width: propertySelectMenuWidth,
            flexShrink: 0
        },

        drawerPaper: {
            width: propertySelectMenuWidth
        },

        toolBar: {
            justifyContent: 'space-between'
        },

        iconHover: {
            "&:hover": {
                color: theme.palette.primary.main
            }
        },

        list: {
            padding: 0
        },

        tooltip: {
            maxWidth: 200
        },

        listItem: {
            paddingTop: theme.spacing(1.5),
            paddingBottom: theme.spacing(1.5)
        },

        listItemText: {
            whiteSpace: 'nowrap'
        }
    }),
);
