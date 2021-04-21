// Style
import { useStyles } from "./text-app.style";

export const TextApp = (): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.textApp}>
            Lorem ipsum
        </div>
    );
};
