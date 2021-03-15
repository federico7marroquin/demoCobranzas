import React from 'react'

import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles'

const clientOptions = [
    {
        value: '1',
        label: 'Cliente 1',
    },
    {
        value: '2',
        label: 'Cliente 2',
    },
    {
        value: '3',
        label: 'Cliente 3',
    },
    {
        value: '4',
        label: 'Cliente 4',
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            width: '30ch',
        },
    },
    row: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        '& .MuiTextField-root': {
            width: '100%',
        },
    },

    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    dropzone: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    button: {
        color: "#fff"
    },
    buttonSubmit: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(7),

    }
}))



const CampaignForm = () => {

    const classes = useStyles()

    const [client, setClient] = React.useState(1)

    const handleChange = (event) => {
        setClient(event.target.value)
    }

    return (
        <Container fluid="true" className={classes.root}>
            <Grid container >
                <Grid item xs={12} className={classes.row}>
                    <Typography variant="h6"> Nueva Campaña</Typography>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid item xs={12} >
                    <Grid container className={classes.row} spacing={1}>
                        <Grid item xs={3}>
                            <Typography>Cliente</Typography>
                        </Grid>
                        <Grid item xs={4} >
                            <TextField
                                label="Cliente"
                                select
                                variant="outlined"
                                size="small"
                                value={client}
                                onChange={handleChange}
                            >
                                {clientOptions.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                    </Grid>
                    <Grid container className={classes.row} spacing={1}>
                        <Grid item xs={3}>
                            <Typography>Campaña</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField label="Campaña" variant="outlined" size="small" />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.row} spacing={1}>
                        <Grid item xs={3}>
                            <Typography>Descripción</Typography>
                        </Grid>
                        <Grid item xs={8} >
                            <TextField
                                label="Descripción"
                                variant="outlined"
                                size="small"
                                multiline
                                fullWidth
                                rows={4}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.row} spacing={1}>
                        <Grid item xs={3}>
                            <Typography>Vigencia campaña</Typography>
                        </Grid>
                        <Grid item xs={4} >
                            <TextField
                                variant="outlined"
                                size="small"
                                type="date"
                                helperText="Fecha de inicio"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                variant="outlined"
                                size="small"
                                type="date"
                                helperText="Fecha de finalización"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <Divider className={classes.divider} />
                    <Grid container className={classes.dropzone}>
                        <Grid item xs={3}>
                            <Typography>Archivo Campaña</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Button className={classes.button} variant="contained" color="secondary">
                                Subir Archivo
                            </Button >
                        </Grid>
                    </Grid>
                    <Grid container className="">
                        <Grid item xs={3}>
                            <Typography>Depurar y limpiar datos</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Switch />
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid item xs={12} >
                    <Grid container className={classes.row} spacing={1}>
                        <Typography variant="subtitle2" >Parámetros</Typography>
                    </Grid>
                    <Grid container className={classes.row} spacing={1}>
                        <Grid item xs={3}>
                            <Typography>Horario de llamadas</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField variant="outlined" size="small" type="time" helperText="Hora de inicio" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField variant="outlined" size="small" type="time" helperText="Hora final" />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.row} spacing={1}>
                        <Grid item xs={3}>
                            <Typography># intentos diarios por registro</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField variant="outlined" size="small" type="number" />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.row} spacing={1}>
                        <Grid item xs={3}>
                            <Typography># intentos durante la campaña</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField variant="outlined" size="small" type="number" />
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid item xs={12}>
                    <Grid container className={classes.row} spacing={1}>
                        <Typography variant="subtitle2" >Alertas y notificaciones</Typography>
                    </Grid>
                    <Grid container className={classes.row} spacing={1}>
                        <Grid item xs={3}>
                            <Typography>SMS</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Switch />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.row} spacing={1}>
                        <Grid item xs={3}>
                            <Typography>Correo electrónico</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Switch />
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                </Grid>

                <Grid item xs={12}  >
                    <Button className={`${classes.buttonSubmit} ${classes.button}`} variant="contained" color="secondary">
                        Crear
                </Button>
                </Grid>

            </Grid>
        </Container>
    )
}

export default CampaignForm
