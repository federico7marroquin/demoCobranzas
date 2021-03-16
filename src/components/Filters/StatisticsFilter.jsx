import React from 'react'

import ButtonGroup from '@material-ui/core/ButtonGroup'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'

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
]

const names = [
    'Cliente preferencial',
    'Cliente empresa',
    'Cliente particular',
    'Cliente sector público',
    'Cliente interno',
];

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


const StatisticsFilter = () => {
    const classes = useStyles()
    const [client, setClient] = React.useState(0)
    const [clientType, setClientType] = React.useState([]);

    const handleChange = (event) => {
        setClient(event.target.value)
    }

    const handleClientChange = (event) => {
        setClientType(event.target.value);
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
                            // size="small"
                            
                            value={client}
                            onChange={handleChange}
                        >
                            {campaignOptions.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item className={classes.select} >

                        <FormControl variant="outlined" className={classes.select}>
                            <InputLabel htmlFor="outlined-client-simple">Cliente</InputLabel>
                            <Select
                                value={clientType}
                                onChange={handleClientChange}
                                label="Cliente"
                                multiple
                                multiline
                                // size="small"
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
                    spacing={4}
                    alignItems="flex-end"
                >
                    <Grid item >
                        <ButtonGroup size="large" aria-label="large outlined primary button group">
                            <Button>Hoy</Button>
                            <Button>Semana</Button>
                            <Button>Mes</Button>
                        </ButtonGroup>
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
