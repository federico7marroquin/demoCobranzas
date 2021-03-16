import React from 'react'

import { useStyles } from '../../styles/containers/styles'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid  from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import ContactChart from '../../components/Charts/ContactChart'

const ComplianceContainer = () => {
    const classes = useStyles()

    return (
        <Grid item xs={12}>
            <Paper className={classes.paper} >
                <Box marginTop={2} marginLeft={3}>
                     <Typography variant="h6">% Cumplimientos de pago</Typography>
                </Box>
                <Box margin={3} className={classes.vhHeight}>
                    <ContactChart />
                </Box>
            </Paper>
        </Grid>
    )
}

export default ComplianceContainer
