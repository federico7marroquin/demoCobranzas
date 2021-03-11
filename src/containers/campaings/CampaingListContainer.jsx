import React from 'react'
import CardCampaing from '../../components/Campaing/CardCampaing';
import { useStyles } from '../../styles/containers/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const CampaingListContainer = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={6}>
                {[1,2,3,4,5,6].map(element => (
                    <Grid item xs={4}> 
                        <Paper className={classes.paper}>
                            <CardCampaing />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </main>
    )
}
export default CampaingListContainer
