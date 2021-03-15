import React from 'react'

import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Toolbar from '@material-ui/core/Toolbar'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'

import { makeStyles } from '@material-ui/core/styles'

import { NavLink, useLocation, useRouteMatch } from 'react-router-dom'

const drawerWidth = 240

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
        // color: theme.palette.secondary.main,
        backgroundColor: '#E3F2FD',
    }

}))


const Listbar = (routes, url, classes, location) => (

    routes.map(route =>

        <NavLink
            key={route.id}
            to={`${url}/${route.route}`}
            style={{ textDecoration: "none", color: "#000000DE" }}
        >
            <ListItem
                button
                className={`${classes.listItem} ${location.pathname === url + '/' + route.route ? classes.active : ''}`} >
                <ListItemText primary={route.label} />
            </ListItem>
        </NavLink>

    ))


const Sidebar = (props) => {
    const classes = useStyles()
    const location = useLocation()
    const { url } = useRouteMatch()

    const { listItems } = props

    return (
        <Drawer
            variant="permanent"
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            {
                listItems.map(element => {
                    return (
                        <React.Fragment key={element.id}>
                            <div className={classes.drawerContainer}>
                                {element.header !== '' &&
                                    <Typography className={classes.label}>{element.header}</Typography>}
                                <List>
                                    {
                                        Listbar(element.routes, url, classes, location)
                                    }
                                </List>
                            </div>
                            {element.divider && <Divider />}
                        </React.Fragment>
                    )

                })
            }
        </Drawer >
    )
}

export default Sidebar
