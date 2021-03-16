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



const CampaignDummy = () => {

    const classes = useStyles()

    const [client, setClient] = React.useState(1)

    const handleChange = (event) => {
        setClient(event.target.value)
    }

    return (
        <Container fluid="true" className={classes.root}>
            <Grid container >
                <Grid item xs={12} className={classes.row}>
                    <Typography variant="h6">Información de la Campaña</Typography>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid item xs={12} >
                    <Grid container className={classes.row} spacing={1}>
                        <Grid item xs={3}>
                            <Typography variant="subtitle2">Cliente:</Typography>
                        </Grid>
                        <Grid item xs={4} >
                            <Typography variant="body">Cliente particular, Cliente preferencial</Typography>
                        </Grid>

                    </Grid>
                    <Grid container className={classes.row} spacing={1}>
                        <Grid item xs={3}>
                            <Typography variant="subtitle2">Campaña:</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body">Campaña de pagos enero</Typography>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.row} spacing={1}>
                        <Grid item xs={3}>
                            <Typography variant="subtitle2">Descripción:</Typography>
                        </Grid>
                        <Grid item xs={8} >
                            <Typography variant="body2">Campaña de cobros dirigida a clientes particulares con buen historial crediticio</Typography>

                        </Grid>
                    </Grid>
                    <Grid container className={classes.row} spacing={1}>
                        <Grid item xs={3}>
                            <Typography variant="subtitle2">Vigencia campaña:</Typography>
                        </Grid>
                        <Grid item xs={3} >
                            <Typography variant="body2">Fecha de inicio: 01/01/2021</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body2">Fecha de finalización: 30/01/2021</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <Divider className={classes.divider} />
                </Grid>
                <Grid item xs={12} >
                    <Grid container className={classes.row} spacing={1}>
                        <Typography variant="subtitle2" >Parámetros</Typography>
                    </Grid>
                    <Grid container className={classes.row} spacing={1}>
                        <Grid item xs={3}>
                            <Typography variant="subtitle2" >Horario de llamadas:</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body2">Hora de inicio: 10:00 am</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body2">Hora de finalización: 06:00 pm</Typography>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.row} spacing={1}>
                        <Grid item xs={3}>
                            <Typography variant="subtitle2"># intentos diarios por registro:</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body2">4</Typography>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.row} spacing={1}>
                        <Grid item xs={3}>
                            <Typography variant="subtitle2"># intentos durante la campaña:</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body2">60</Typography>
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
                            <Typography variant="subtitle2">SMS:</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Switch disabled />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.row} spacing={1}>
                        <Grid item xs={3}>
                            <Typography variant="subtitle2">Correo electrónico:</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Switch disabled checked />
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                </Grid>

                <Grid item xs={12}  >
                    <Button className={`${classes.buttonSubmit} ${classes.button}`} variant="contained" color="secondary">
                        Editar
                </Button>
                </Grid>

            </Grid>
        </Container>
    )
}

export default CampaignDummy
