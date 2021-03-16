import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'

import Logo from '../../assets/images/Logo.png'

import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: theme.appBar.color,
    zIndex: theme.zIndex.drawer + 1,
  },
  menuTitle: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: theme.palette.secondary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    textTransform: 'none',

  },
  title: {
    flexGrow: 1,
  },
}))

const Navtab = () => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.AppBar}>
      <Toolbar>
        <img alt="logo" src={Logo} width="45.5" height="42" />
        <Typography variant="h6" className={classes.menuTitle} >Be Pro Solutions</Typography>
 
        <Link to="/config/campaign/list" style={{ textDecoration: "none", color: "#000000DE" }}>
          <Button className={classes.menuButton}>
            <Typography >Configuración</Typography>
          </Button>
        </Link>
        <Link to="/statistics/contactability" style={{ textDecoration: "none", color: "#000000DE" }}>
          <Button className={classes.menuButton}>
            <Typography >Estadísticas</Typography>
          </Button>
        </Link>
      </Toolbar>

    </AppBar>
  )
}

export default Navtab
