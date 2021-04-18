// Material-ui
import {
    Box,
} from '@material-ui/core';

// Interfaces
interface PropertyConfigItemProps {
    children: JSX.Element;
    title?: string;
}

export const PropertyConfigItem = (props: PropertyConfigItemProps): JSX.Element => {

    return (
        <Box px={1.5} py={1.5}>
            { props.title && (
                <Box fontWeight="fontWeightBold" mb={1}>{props.title}</Box>
            )}

            { props.children}
        </Box>
    );
}
