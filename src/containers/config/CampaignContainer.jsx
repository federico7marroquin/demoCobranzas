import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import CampaignForm from '../../components/Forms/CampaignForm'

import { useStyles } from '../../styles/containers/styles'

const CampaignContainer = () => {
    const classes = useStyles();

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
