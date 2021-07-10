import React, { useState, useEffect } from 'react';
import { ColorResult, SketchPicker } from 'react-color';
// Utils
import { rgbColorToString } from '../../../utils/rgb-color-to-string.utils';
// Models
import { ColorType } from '../../../models/property-config.model';
// Style
import { useStyles } from "./color-picker.style";
// Material-ui
import {
    Box,
    Grid,
    Popover,
    GridSize
} from "@material-ui/core";

// Interfaces
interface ColorPickerFieldsProps {
    value: ColorType;
    valueInputName: string;
    validateFields: (fieldName: string, value: any) => void;
    gridSize?: GridSize;
}

export const ColorPickerFields = (props: ColorPickerFieldsProps): JSX.Element => {
    const classes = useStyles();

    // States
    const [currentColor, setCurrentColor] = useState<ColorType>(props.value);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    // Methods
    const getPopoverId = (isOpen: boolean) => isOpen ? 'selecionar-cor' : undefined;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const updateColor = (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentColor({ hex: color.hex, rgb: { ...color.rgb } });
        props.validateFields(props.valueInputName, { hex: color.hex, rgb: { ...color.rgb } })
    };

    // Effects
    useEffect(() => {
        setCurrentColor(props.value);
    }, [props.value])

    return (
        <Grid
            item
            xs={props.gridSize ? props.gridSize : 12}
            className={classes.gridContainer}
        >
            <>
                <Box
                    className={classes.selectColorButton}
                    aria-describedby={getPopoverId(Boolean(anchorEl))}
                    onClick={handleClick}
                    style={{ backgroundColor: rgbColorToString(currentColor.rgb) }}
                />
                <Popover
                    className={classes.popover}
                    id={getPopoverId(Boolean(anchorEl))}
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <SketchPicker
                        color={currentColor.rgb}
                        onChangeComplete={updateColor}
                        presetColors={[
                            '#27ae60',
                            '#2ecc71',
                            '#2980b9',
                            '#3498db',
                            '#8e44ad',
                            '#9b59b6',
                            '#c0392b',
                            '#e74c3c',
                            '#d35400',
                            '#e67e22',
                            '#f39c12',
                            '#f1c40f',
                            '#000000',
                            '#4A4A4A',
                            '#9B9B9B',
                            '#FFFFFF'
                        ]}
                    />
                </Popover>
            </>
        </Grid>
    );
};
