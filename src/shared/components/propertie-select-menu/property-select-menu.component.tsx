import React from 'react';
import { useSelector } from 'react-redux';
// Reducer
import { actionAppProperty } from '../../../store-config/actions/app-property.actions';
// Models
import { TextAppProperty, TextAppPropertyState } from '../../models/reducers/text-app-property.model';
import { AllReducerState } from '../../models/reducers/all-reducer-state.model';
// Style
import { useStyles } from "./property-select-menu.style";
// Material-ui
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    Hidden,
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

const PropertySelectMenu = (): JSX.Element => {
    const classes = useStyles();

    // Redux selectors
    const textAppProperty: TextAppPropertyState = useSelector((state: AllReducerState) => state.textAppProperty);

    return (
        <Hidden xsDown implementation="css">
            <Drawer
                classes={{ paper: classes.drawerPaper }}
                className={classes.drawer}
                variant="permanent"
            >
                <Toolbar variant="dense" />
                <div className={classes.drawerContainer}>

                    {/* Top menu */}

                    <Toolbar variant="dense" className={classes.toolBar}>
                        <Tooltip title="Remover todos os estilos" arrow>
                            <IconButton
                                classes={{ root: classes.iconHover }}
                                size="small"
                                aria-label="Remover todos os estilos"
                                onClick={() => alert('Em breve!')}
                            >
                                <DeleteForeverIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Estilos prontos" arrow>
                            <IconButton
                                classes={{ root: classes.iconHover }}
                                size="small"
                                aria-label="Estilos prontos"
                                onClick={() => alert('Em breve!')}
                            >
                                <WidgetsIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Infommações sobre as propriedades" arrow>
                            <IconButton
                                classes={{ root: classes.iconHover }}
                                size="small"
                                aria-label="Informações sobre as propriedades"
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
                                    <Tooltip classes={{ tooltip: classes.tooltip }} title={textProperty.description} placement="right" arrow>
                                        <ListItem
                                            button
                                            dense
                                            selected={textAppProperty.selected === textProperty.property}
                                            className={classes.listItem}
                                            onClick={() => actionAppProperty.selectAppProperty(textProperty.property)}
                                        >
                                            <ListItemText className={classes.listItemText} primary={textProperty.property} />

                                            <ListItemSecondaryAction>
                                                <Switch
                                                    color="primary"
                                                    size="small"
                                                    onChange={() => actionAppProperty.toggleAppProperty(textProperty.property)}
                                                    checked={textProperty.isActive}
                                                    inputProps={{ 'aria-labelledby': `Interrupitor de ${textProperty.description}` }}
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
        </Hidden>
    );
}

export default PropertySelectMenu;
