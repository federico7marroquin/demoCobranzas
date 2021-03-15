import React from 'react'
import CardCampaign from '../../components/Campaign/CardCampaign';
import { useStyles } from '../../styles/containers/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const CampaignListContainer = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={6}>
                {[1,2,3,4,5,6].map(element => (
                    <Grid item xs={12} sm={6} md={4} key={element}> 
                        <Paper className={classes.paper}>
                            <CardCampaign />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
export default CampaignListContainer
