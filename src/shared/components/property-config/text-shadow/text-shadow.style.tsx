// Material-ui
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        pagination: {
            '& .MuiPagination-root': {
                width: '100%',

                '& .MuiPagination-ul': {
                    '& li ~ li' : {
                        marginLeft: 3
                    }
                }
            }
        }
    })
);
