import React from 'react'

import { useStyles } from '../../styles/containers/styles'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import CompromiseChart from '../../components/Charts/CompromiseChart'

const CompromisesContainer = () => {
    const classes = useStyles()

    return (
        <Grid item xs={12}>
            <Paper className={classes.paper} >
                <Box marginTop={2} marginLeft={3}>
                    <Typography variant="h6" >% Compromisos de pago</Typography>
                </Box>
                <Box margin={3} className={classes.vhHeight}>
                    <CompromiseChart />
                </Box>
            </Paper>
        </Grid>
    )
}



export default CompromisesContainer
