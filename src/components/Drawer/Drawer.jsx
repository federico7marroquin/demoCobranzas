import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        padding: theme.spacing(0, 2)
    },
    label: {
        color: theme.palette.grey[500],
        padding: theme.spacing(2, 1, 0, 1)
    },
    listItem: {
        margin: theme.spacing(1, 0),
        paddingLeft: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
    },
    active: {
        backgroundColor: '#E3F2FD',
    }

}))


const Sidebar = (props) => {
    const classes = useStyles()
    const theme = useTheme()
    const location = useLocation()

    return (
        <Drawer
            variant="permanent"
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    <NavLink 
                        exact to="/statistics" 
                        style={{ textDecoration: "none", color: "#000000DE" }}
                        activeStyle={{color: theme.palette.secondary.main, }}
                    >
                        <ListItem button className={`${classes.listItem} ${location.pathname==='/statistics'? classes.active: ''}`} >
                            <ListItemText primary="Contactabilidad" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="#" style={{ textDecoration: "none", color: "#000000DE" }}>
                        <ListItem button className={classes.listItem} >
                            <ListItemText primary="TMO" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="#" style={{ textDecoration: "none", color: "#000000DE" }}>
                        <ListItem button className={classes.listItem} >
                            <ListItemText primary="Llamadas" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="#" style={{ textDecoration: "none", color: "#000000DE" }}>
                        <ListItem button className={classes.listItem} >
                            <ListItemText primary="Interacciones" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="#" style={{ textDecoration: "none", color: "#000000DE" }}>
                        <ListItem button className={classes.listItem} >
                            <ListItemText primary="Tops" />
                        </ListItem>

                    </NavLink>
                </List>
            </div>
            <Divider />
            <div className={classes.drawerContainer}>
                <Typography className={classes.label}>Watson assistant</Typography>
                <List>
                    <NavLink to="#" style={{ textDecoration: "none", color: "#000000DE" }}>
                        <ListItem button className={classes.listItem}>
                            <ListItemText primary="Overview" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="#" style={{ textDecoration: "none", color: "#000000DE" }}>
                        <ListItem button className={classes.listItem}>
                            <ListItemText primary="Conversaciones" />
                        </ListItem>
                    </NavLink>

                </List>
            </div>
        </Drawer>
    )
}

export default Sidebar
