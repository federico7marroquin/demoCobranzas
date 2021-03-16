import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { makeStyles } from '@material-ui/core/styles'

import MaterialUIPickers from './DatePickers'

const campaignOptions = [

    {
        value: '0',
        label: 'Todas las campañas',
    },
    {
        value: '1',
        label: 'Campaña 1',
    },
    {
        value: '2',
        label: 'Campaña 2',
    },
    {
        value: '3',
        label: 'Campaña 3',
    },
    {
        value: '4',
        label: 'Campaña 4',
    },
    {
        value: '5',
        label: 'Campaña 5',
    },
]

const names = [
    'Cliente preferencial',
    'Cliente empresa',
    'Cliente particular',
    'Cliente sector público',
    'Cliente interno',
]

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            width: '30ch',
        },
    },
    row: {
        '& .MuiTextField-root': {
            width: '100%',
        },
    },
    select: {
        width: '100%',
        '& .MuiTextField-root': {
            width: '100%',
        },
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },

    button: {
        width: '100%',
        color: "#fff",

    },
    buttonColor: {
        color: "#fff",
    }
}))


const StatisticsFilter = (props) => {
    const classes = useStyles()
    const [clientType, setClientType] = React.useState([])

    const { campaign, setCampaign, date, setDate } = props

    const handleChange = (event) => {
        setCampaign(event.target.value)
    }

    const handleClientChange = (event) => {
        setClientType(event.target.value)
    }

    const handleDate = (event, newDate) => {
        setDate(newDate);
    };

    return (
        <Grid container spacing={2} className={classes.root} >
            <Grid item xs={4} >
                <Grid
                    container
                    direction="column"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <Grid item className={classes.select} >
                        <TextField
                            label="Campañas"
                            select
                            variant="outlined"
                            size="small"
                            color="secondary"

                            value={campaign}
                            onChange={handleChange}
                        >
                            {campaignOptions.map(option => (
                                <MenuItem key={option.value} value={option.label}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item className={classes.select} >

                        <FormControl
                            color="secondary"
                            size="small"
                            variant="outlined"
                            className={classes.select}
                        >
                            <InputLabel htmlFor="outlined-client-simple">Cliente</InputLabel>
                            <Select
                                value={clientType}
                                onChange={handleClientChange}
                                label="Cliente"
                                multiple
                                multiline
                                inputProps={{
                                    name: 'cliente',
                                    id: 'outlined-client-simple',
                                }}
                            >
                                {names.map((name) => (
                                    <MenuItem key={name} value={name} >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={8}>
                <Grid
                    container
                    direction="column"
                    spacing={2}
                    alignItems="flex-end"
                >
                    <Grid item >
                        <ToggleButtonGroup
                            value={date}
                            exclusive
                            onChange={handleDate}
                            aria-label="date picker"
                        >
                            <ToggleButton value="hoy" aria-label="hoy">
                                Hoy
                            </ToggleButton>
                            <ToggleButton value="semana" aria-label="semana actual">
                                Semana
                            </ToggleButton>
                            <ToggleButton value="mes" aria-label="mes actual">
                                Mes
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                    <Grid item className={classes.row} >
                        <MaterialUIPickers />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default StatisticsFilter
