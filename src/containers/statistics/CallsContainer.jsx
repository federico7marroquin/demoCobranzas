import React from 'react'

import { useStyles } from '../../styles/containers/styles'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import CallBarChart from '../../components/Charts/CallBarChart'

const CallsContainer = () => {
    const classes = useStyles()

    return (
        <Grid item xs={12}>
            <Paper className={classes.paper} >
                <Box marginTop={2} marginLeft={3}>
                    <Typography variant="h6" >% Efectividad de llamadas por # de contactos</Typography>
                </Box>
                <Box margin={3} className={classes.vhHeight}>
                    <CallBarChart />
                </Box>
            </Paper>
        </Grid>
    )
}

export default CallsContainer
