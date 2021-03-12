import React from 'react'

import { useStyles } from '../../styles/containers/styles'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import ContactChart from '../../components/Charts/ContactChart'
import CompromiseChart from '../../components/Charts/CompromiseChart'

const CompromisesContainer = () => {
    const classes = useStyles()

    return (
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper} >
                    <Box marginTop={2} marginLeft={3}>
                        <Typography variant="h6" >% Compromisos de pago</Typography>
                    </Box>
                    <Box margin={3} className={classes.vhHeight}>
                        {/* <ContactChart />                     */}
                        <CompromiseChart />
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    </Container>
    )
}



export default CompromisesContainer
