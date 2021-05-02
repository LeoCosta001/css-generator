// Material-ui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        textApp: {
            color: 'black',
            maxHeight: '100%',
            padding: theme.spacing(2),
            overflow: 'auto',
            wordWrap:'break-word'
        }
    }),
);
