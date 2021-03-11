import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import CampaingForm from '../../components/Forms/CampaingForm'

import { useStyles } from '../../styles/containers/styles'

const CampaingContainer = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid>
                    <Paper>
                        <CampaingForm />
                    </Paper>
                </Grid>
            </Container>
        </main>
    )
}

export default CampaingContainer
