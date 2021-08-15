import clsx from 'clsx';
// Style
import { useStyles } from "./property-config-item.style";
// Material-ui
import {
    Box,
} from '@material-ui/core';

// Interfaces
interface PropertyConfigItemProps {
    children: JSX.Element;
    title?: string;
    hoverEffect?: boolean;
    onClick?: () => void;
}

export const PropertyConfigItem = (props: PropertyConfigItemProps): JSX.Element => {
    const classes = useStyles();

    // Methods
    const onClick = () => {
        if (props.onClick) props.onClick();
    };

    return (
        <Box
            p={1.5}
            className={clsx({ [classes.hoverEffect]: props.hoverEffect })}
            onClick={onClick}
        >
            {props.title && (
                <Box fontWeight="fontWeightBold" mb={1}>{props.title}</Box>
            )}

            {props.children}
        </Box>
    );
}
