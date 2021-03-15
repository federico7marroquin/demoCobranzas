import React from 'react'

import { useStyles } from '../../styles/containers/styles'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'

import TopBarChar from '../../components/Charts/TopBarChart'

const TopsContainer = () => {
    const classes = useStyles()

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Paper className={classes.paper} >
                <Box marginTop={2} marginLeft={3}>
                     <Typography variant="h6">Top razones de no pago</Typography>
                </Box>
                <Box margin={3} className={classes.vhMediumHeight}>
                    <TopBarChar />
                </Box>
            </Paper>
        </Container>
    )
}

export default TopsContainer
