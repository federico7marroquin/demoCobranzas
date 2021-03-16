import React from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'


import logo from '../../assets/images/Be pro.png';

import { makeStyles } from '@material-ui/core/styles'

import { NavLink } from 'react-router-dom'



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://bepro.la/">
                bepro.la
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        // width: '40%'
        // backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        color: '#fff',
        margin: theme.spacing(3, 0, 2),
    },
}))

export default function SignIn(props) {
    const classes = useStyles()
    const { setLogin } = props

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                    <img 
                        src={logo} 
                        alt="Logo de be pro solutions" 
                        className={classes.avatar}
                    />
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo electrónico"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Recuerdame"
                    />
                    <NavLink to="/statistics/contactability"  style={{ textDecoration: "none", color: "#000000DE" }}>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                            onClick={() => setLogin(true)}
                        >
                            Iniciar Sesión
                    </Button>
                    </NavLink>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                ¿Olvidaste tu clave?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"¿No tiene ninguna cuenta? Crea una."}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    )
}