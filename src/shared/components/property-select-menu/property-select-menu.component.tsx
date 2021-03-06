import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// Translates
import { i18n } from '../../../translate/i18n';
// Reducer
import { actionAppProperty } from '../../../store-config/actions/app-property.actions';
// Constants
import { TOOLTIP_DELAY } from '../../constants/delay.constant';
// Components
import { GenericDialog } from '../generic-dialog/generic-dialog.component';
// Models
import { TextAppProperty, TextAppPropertyState } from '../../models/app/text-app-property.model';
import { AllReducerState } from '../../models/reducers/all-reducer-state.model';
import { PROPERTY_NAME } from '../../models/property-name.model';
// Style
import { useStyles } from "./property-select-menu.style";
// Material-ui
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    Toolbar,
    IconButton,
    Tooltip,
    ListItemSecondaryAction,
    Switch
} from '@material-ui/core';
import {
    DeleteForever as DeleteForeverIcon,
    Widgets as WidgetsIcon,
    Info as InfoIcon,
} from '@material-ui/icons';

export const PropertySelectMenu = (): JSX.Element => {
    const classes = useStyles();

    // Redux selectors
    const textAppProperty: TextAppPropertyState = useSelector((state: AllReducerState) => state.textAppProperty);

    // States
    const [showRemoveAllStylesDialog, setShowRemoveAllStylesDialog] = useState<boolean>(false);

    // Methods
    const selectAppProperty = (propertyName: PROPERTY_NAME) => {
        actionAppProperty.selectAppProperty(propertyName);
    };

    const toggleAppProperty = (propertyName: PROPERTY_NAME, isActive: boolean) => {
        if (!isActive) actionAppProperty.selectAppProperty(propertyName);
        actionAppProperty.toggleAppProperty(propertyName);
    };

    return (
        <>
            <Drawer
                classes={{ paper: classes.drawerPaper }}
                className={classes.drawer}
                variant="permanent"
            >
                <Toolbar variant="dense" />
                <div className={classes.drawerContainer}>

                    {/* Top menu */}

                    <Toolbar variant="dense" className={classes.toolBar}>
                        <Tooltip
                            enterDelay={TOOLTIP_DELAY.SUB_MENU}
                            enterNextDelay={TOOLTIP_DELAY.SUB_MENU}
                            title={(i18n.t('button.resetAllStyles.tooltip') as string)}
                            arrow
                        >
                            <IconButton
                                className={classes.iconButton}
                                classes={{ root: classes.iconHover }}
                                size="small"
                                aria-label={i18n.t('button.resetAllStyles.ariaLabel')}
                                onClick={() => setShowRemoveAllStylesDialog(true)}
                            >
                                <DeleteForeverIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip
                            enterDelay={TOOLTIP_DELAY.SUB_MENU}
                            enterNextDelay={TOOLTIP_DELAY.SUB_MENU}
                            title={(i18n.t('button.readyStyles.tooltip') as string)}
                            arrow
                        >
                            <IconButton
                                className={classes.iconButton}
                                classes={{ root: classes.iconHover }}
                                size="small"
                                aria-label={i18n.t('button.readyStyles.ariaLabel')}
                                onClick={() => alert('Em breve!')}
                            >
                                <WidgetsIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip
                            enterDelay={TOOLTIP_DELAY.SUB_MENU}
                            enterNextDelay={TOOLTIP_DELAY.SUB_MENU}
                            title={(i18n.t('button.propertyDetails.tooltip') as string)}
                            arrow
                        >
                            <IconButton
                                className={classes.iconButton}
                                classes={{ root: classes.iconHover }}
                                size="small"
                                aria-label={i18n.t('button.propertyDetails.ariaLabel')}
                                onClick={() => alert('Em breve!')}
                            >
                                <InfoIcon />
                            </IconButton>
                        </Tooltip>
                    </Toolbar>

                    <Divider />

                    {/* App property list */}

                    <List className={classes.list}>
                        {
                            textAppProperty.list.map((textProperty: TextAppProperty): JSX.Element => (
                                <React.Fragment key={textProperty.property}>
                                    <Tooltip
                                        classes={{ tooltip: classes.tooltip }}
                                        enterDelay={TOOLTIP_DELAY.DESCRIPTION}
                                        enterNextDelay={TOOLTIP_DELAY.DESCRIPTION}
                                        title={textProperty.description}
                                        placement="right"
                                        arrow
                                    >
                                        <ListItem
                                            button
                                            dense
                                            selected={textAppProperty.selected === textProperty.property}
                                            className={classes.listItem}
                                            onClick={() => selectAppProperty(textProperty.property)}
                                        >
                                            <ListItemText className={classes.listItemText} primary={textProperty.property} />

                                            <ListItemSecondaryAction>
                                                <Switch
                                                    color="primary"
                                                    size="small"
                                                    onChange={() => toggleAppProperty(textProperty.property, textProperty.isActive)}
                                                    checked={textProperty.isActive}
                                                    inputProps={{
                                                        'aria-labelledby': i18n.t('switch.propertySelect.ariaLabel', {
                                                            propertyName: textProperty.property
                                                        })
                                                    }}
                                                />
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    </Tooltip>

                                    <Divider />
                                </React.Fragment>
                            ))}
                    </List>
                </div>
            </Drawer>

            {/* Dialogs */}

            <GenericDialog
                isOpen={showRemoveAllStylesDialog}
                title={i18n.t('dialog.resetAllStyles.title')}
                text={i18n.t('dialog.resetAllStyles.text')}
                onConfirm={() => actionAppProperty.resetAllAppProperty()}
                onClose={() => setShowRemoveAllStylesDialog(false)}
            />
        </>
    );
};
