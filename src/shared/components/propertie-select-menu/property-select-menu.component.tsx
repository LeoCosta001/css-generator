import { connect, MapStateToPropsParam } from 'react-redux';
// Actions
import { toggleAppProperty } from '../../../store-config/actions/app-property.actions';
// Style
import { useStyles } from "./property-select-menu.style";
// Material
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

// Interfaces
export interface AppPropertyList {
    name: string;
    property: string;
    isActive: boolean;
}

interface PropertySelectMenuProps {
    appPropertyList: AppPropertyList[];
    dispatch: any
}

const PropertySelectMenu = (props: PropertySelectMenuProps): JSX.Element => {
    const classes = useStyles();

    const drawer = (
        <>
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
                {// @ts-ignore
                    props.appPropertyList.map((appProperty: AppPropertyList): JSX.Element => (
                        <ListItem button dense key={appProperty.property} onClick={() => console.log(`propriedade ${appProperty.property} selecionada`)}>
                            <ListItemText id={'labelId'} primary={appProperty.name} />
                            <ListItemText id={'labelId2'} primary={appProperty.property} />

                            <ListItemSecondaryAction>
                                <Switch
                                    color="secondary"
                                    size="small"
                                    onChange={() => props.dispatch(toggleAppProperty(appProperty.property))}
                                    checked={appProperty.isActive}
                                    inputProps={{ 'aria-labelledby': `Interrupitor de ${appProperty.name}` }}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
            </List>
        </>
    );

    return (
        <Hidden xsDown implementation="css">
            <Drawer
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
                {drawer}
            </Drawer>
        </Hidden>
    );
}

// @ts-ignore
export default connect((state: MapStateToPropsParam<any, {}, any>) => ({ appPropertyList: state.appProperty.list }))(PropertySelectMenu)
