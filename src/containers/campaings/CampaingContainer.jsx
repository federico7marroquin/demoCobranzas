import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'

import CampaingForm from '../../components/Forms/CampaingForm'

import { useStyles } from '../../styles/containers/styles'

const CampaingContainer = () => {
    const classes = useStyles();

    return (
        <Container  maxWidth="lg" className={classes.container}>
            <Grid>
                <Paper>
                    <CampaingForm />
                </Paper>
            </Grid>
        </Container>
    )
}

export default CampaingContainer
