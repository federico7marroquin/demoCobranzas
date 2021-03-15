import React from 'react'

import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import Grid from '@material-ui/core/Grid'

import ButtonGroup from '@material-ui/core/ButtonGroup'
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

const StatisticsFilter = () => {   
    const [client, setClient] = React.useState(0)

    const handleChange = (event) => {
        setClient(event.target.value)
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item>
                    <TextField
                        label="Campañas"
                        select
                        variant="outlined"
                        size="small"
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
                <Grid item>
                    <MaterialUIPickers/>
                </Grid>
            </Grid>
        </div >
    )
}

export default StatisticsFilter
