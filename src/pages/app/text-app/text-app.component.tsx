import { useSelector } from 'react-redux';
// Style
import { useStyles } from "./text-app.style";

export const TextApp = (): JSX.Element => {
    const classes = useStyles();

    // Redux selectors
    const textView: string = useSelector((state: any) => {
        return state.textView
    });

    return (
        <div className={classes.textApp}>
            {textView}
        </div>
    );
};
