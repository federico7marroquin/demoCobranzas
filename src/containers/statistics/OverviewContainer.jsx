import React from 'react'

import { useStyles } from '../../styles/containers/styles'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import watson1 from '../../assets/images/watson1.PNG';
import watson2 from '../../assets/images/watson2.PNG';

const OverviewContainer = () => {
    const classes = useStyles()

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Paper className={classes.paper} >
                        <Box margin={1} style={{ height: '20vh' }}>
                            <img alt="Watson 1" src={watson1} />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Paper className={classes.paper} >
                        <Box className={classes.vhHeight}>
                            <img alt="Watson 2" src={watson2} style={{maxWidth: '100%', maxHeight: '100%'}} />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default OverviewContainer

