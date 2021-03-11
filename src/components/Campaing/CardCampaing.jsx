import React from 'react'
import Container from '@material-ui/core/Container'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    container: {
        margin: theme.spacing(3,2)
    },
    row: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    client: {
        color: theme.palette.grey[700]
    },
    buttonWrapper: {
        width: '40%',
        marginTop: theme.spacing(5),
    },
    button: {
        color: "#fff",
    },

}))


const CardCampaing = () => {

    const classes = useStyles()

    return (
        <Container fluid className={classes.container}>
            <Typography variant="h6" >Campaña de pagos enero</Typography>
            <Typography variant="caption" className={classes.client}>Cliente corporativo</Typography>
            <Typography>HRN_1001</Typography>
            <div className={classes.buttonWrapper}>
                <Button fullWidth className={classes.button }variant="contained" color="secondary" >Ver</Button>
            </div>
        </Container>

    )
}

export default CardCampaing
