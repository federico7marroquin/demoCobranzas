import React from 'react'

import { useStyles } from '../../styles/containers/styles'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import watson3 from '../../assets/images/watson3.PNG';
import watson4 from '../../assets/images/watson4.PNG';
import watson5 from '../../assets/images/watson5.PNG';
import watson6 from '../../assets/images/watson6.PNG';

const ConversationsContainer = () => {
    const classes = useStyles()
    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid Container container spacing={3}>
                <Grid item xs={6} >
                    <Paper className={classes.paper} >
                        <Box className={classes.vhHeight}>
                            <img alt="Watson 1" src={watson3} className={classes.fullImage} />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper className={classes.paper} >
                        <Box className={classes.vhHeight}>
                            <img alt="Watson 2" src={watson4} className={classes.fullImage} />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper className={classes.paper} >
                        <Box className={classes.vhHeight}>
                            <img alt="Watson 2" src={watson5} className={classes.fullImage} />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper className={classes.paper} >
                        <Box className={classes.vhHeight}>
                            <img alt="Watson 2" src={watson6} className={classes.fullImage} />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ConversationsContainer
