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
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
                <Toolbar variant="dense" className={classes.toolBar}>
                    <Tooltip title="Remover estilos" arrow>
                        <IconButton
                            classes={{ root: classes.iconHover }}
                            size="small"
                            aria-label="Remover estilos"
                        >
                            <DeleteForeverIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Estilos prontos" arrow>
                        <IconButton
                            classes={{ root: classes.iconHover }}
                            size="small"
                            aria-label="Estilos prontos"
                        >
                            <WidgetsIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Infommações sobre as propriedades" arrow>
                        <IconButton
                            classes={{ root: classes.iconHover }}
                            size="small"
                            aria-label="Informações sobre as propriedades"
                        >
                            <InfoIcon />
                        </IconButton>
                    </Tooltip>
                </Toolbar>

                <Divider />

                <List>
                    {
                        textAppProperty.list.map((textProperty: TextAppProperty): JSX.Element => (
                            <ListItem button dense key={textProperty.property} onClick={() => console.log(`propriedade ${textProperty.property} selecionada`)}>
                                <ListItemText id={'labelId'} primary={textProperty.name} />
                                <ListItemText id={'labelId2'} primary={textProperty.property} />

                                <ListItemSecondaryAction>
                                    <Switch
                                        color="primary"
                                        size="small"
                                        onChange={() => actionAppProperty.toggleAppProperty(textProperty.property)}
                                        checked={textProperty.isActive}
                                        inputProps={{ 'aria-labelledby': `Interrupitor de ${textProperty.name}` }}
                                    />
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                </List>
            </Drawer>
        </Hidden>
    );
}

export default PropertySelectMenu;
