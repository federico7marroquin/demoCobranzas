import React from 'react'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { useStyles } from '../../styles/containers/styles'

import CampaignForm from '../../components/Forms/CampaignForm'

const CampaignContainer = () => {
    const classes = useStyles()

    return (
            <Container maxWidth="lg" className={classes.container}>
                <Grid>
                    <Paper>
                        <CampaignForm />
                    </Paper>
                </Grid>
            </Container>
    )
}

export default CampaignContainer
