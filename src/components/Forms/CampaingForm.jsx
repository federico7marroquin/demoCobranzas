import React from 'react'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

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
];

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            width: '27ch',
        },
    },
    section: {
        // paddingTop: theme.spacing(4),
        // paddingBottom: theme.spacing(4)
    },
    row: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
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



const CampaingForm = () => {

    const classes = useStyles()

    const [client, setClient] = React.useState(1)

    const handleChange = (event) => {
        setClient(event.target.value)
    }

    return (
        <Container fluid className={classes.root}>
            <Grid container >
                <Grid item xs={12} className={classes.row}>
                    <Typography variant="h6"> Nueva Campaña</Typography>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid item xs={12} className={classes.section}>
                    <Grid container className={classes.row}>
                        <Grid item xs={2}>
                            <Typography>Cliente</Typography>
                        </Grid>
                        <Grid item xs={3} >
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
                        <Grid item xs={2}>
                            <Typography>Campaña</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField label="Campaña" variant="outlined" size="small" />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.row}>
                        <Grid item xs={2}>
                            <Typography>Nombre</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField label="Nombre" variant="outlined" size="small" />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.row}>
                        <Grid item xs={2}>
                            <Typography>Vigencia campaña</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField  variant="outlined" size="small" type="date" helperText="Fecha de inicio"/>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField  variant="outlined" size="small" type="date" helperText="Fecha de finalización"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.section}>
                    <Divider className={classes.divider} />
                    <Grid container className={classes.dropzone}>
                        <Grid item xs={2}>
                            <Typography>Archivo Campaña</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Button  className={classes.button} variant="contained" color="secondary">
                                Subir Archivo
                            </Button >
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid itme xs={12} className={classes.section}>
                    <Grid container className={classes.row}>
                            <Typography variant="subtitle1" >Parámetros</Typography>
                    </Grid>
                    <Grid container className={classes.row}>
                        <Grid item xs={2}>
                            <Typography>Horario de llamadas</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField variant="outlined" size="small" type="time" helperText="Hora de inicio"/>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField variant="outlined" size="small" type="time" helperText="Hora final" />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.row}>
                        <Grid item xs={2}>
                            <Typography># intentos diarios por registro</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField  variant="outlined" size="small"  type="number"/>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.row}>
                        <Grid item xs={2}>
                            <Typography># intentos durante la campaña</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField  variant="outlined" size="small" type="number" />
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.section} >
                <Button className={`${classes.buttonSubmit} ${classes.button}`} variant="contained" color="secondary">
                    Crear
                </Button>
            </Grid>

        </Container>
    )
}

export default CampaingForm
