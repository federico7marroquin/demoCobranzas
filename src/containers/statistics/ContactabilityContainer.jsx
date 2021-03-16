import React from 'react'

import { useStyles } from '../../styles/containers/styles'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import ContactChart from '../../components/Charts/ContactChart'

const ContactabilityContainer = (props) => {
    const classes = useStyles()
    const { campaign, date } = props

    return (
        <Grid item xs={12} >
            <Paper className={classes.paper} >
                <Box marginTop={2} marginLeft={3}>
                    <Typography variant="h6" >% de contactabilidad</Typography>
                </Box>
                <Box margin={3} className={classes.vhHeight}>
                    <ContactChart 
                        campaign={campaign}
                        date={date}
                    />
                </Box>
            </Paper>
        </Grid>
    )
}

export default ContactabilityContainer
