import React from 'react'

import { useStyles } from '../../styles/containers/styles'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'

import ContactChart from '../../components/Charts/ContactChart'

const ComplianceContainer = () => {
    const classes = useStyles()

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Paper className={classes.paper} >
                <Box marginTop={2} marginLeft={3}>
                     <Typography variant="h6">Cumplimientos de pago</Typography>
                </Box>
                <Box margin={3} className={classes.vhMediumHeight}>
                    <ContactChart />
                </Box>
            </Paper>
        </Container>
    )
}

export default ComplianceContainer
