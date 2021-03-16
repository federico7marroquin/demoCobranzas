import React from 'react'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import { useStyles } from '../../styles/containers/styles'

import CampaignDummy from '../../components/Forms/CampaignDummy'

const DetailContainer = () => {
    const classes = useStyles()

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container >
                <Paper>
                    <CampaignDummy />
                </Paper>
            </Grid>
        </Container>
    )
}

export default DetailContainer
