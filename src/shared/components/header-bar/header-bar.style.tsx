// Material
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1
        },

        logo: {
            display: 'flex',
            justifyContent: 'center',
            fontSize: 17,
            fontWeight: 'lighter'
        },

        menuButton: {
            marginRight: theme.spacing(2)
        },
    }),
);
