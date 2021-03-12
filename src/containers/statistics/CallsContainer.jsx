import React from 'react'

import { useStyles } from '../../styles/containers/styles'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import CallBarChart from '../../components/Charts/CallBarChart'
import CallPieChart from '../../components/Charts/CallPieChart'

const CallsContainer = () => {
    const classes = useStyles()

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
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
                {/* <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <CallPieChart />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid> */}
            </Grid>
        </Container>
    )
}

export default CallsContainer
