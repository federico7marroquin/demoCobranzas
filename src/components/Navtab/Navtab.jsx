import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Logo from '../../assets/images/Logo.png';

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: theme.appBar.color,
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
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.AppBar}>
      <Toolbar>
        <img alt="logo" src={Logo} width="45.5" height="42" />
        <Typography variant="h6" className={classes.menuTitle} >Be Pro Solutions</Typography>
        <Button className={classes.menuButton} onClick={handleClick}>
          <Typography >Campañas</Typography>
          <ExpandMoreIcon />
        </Button>
        <Menu
          id="campaing-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Ver todas las campañas</MenuItem>
          <MenuItem onClick={handleClose}>Crear Campaña</MenuItem>
        </Menu>

        <Button className={classes.menuButton}>
          <Typography >Estadísticas</Typography>
        </Button>
      </Toolbar>

    </AppBar>
  )
}

export default Navtab
