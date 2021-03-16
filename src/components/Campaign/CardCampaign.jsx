import React from 'react'
import Container from '@material-ui/core/Container'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

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


const CardCampaign = () => {

    const classes = useStyles()

    return (
        <Container fluid="true" className={classes.container}>
            <Typography variant="h6" >Campaña de pagos enero</Typography>
            <Typography variant="caption" className={classes.client}>Cliente corporativo</Typography>
            <Typography>HRN_0{Math.floor(Math.random()*100)}</Typography>
            <div className={classes.buttonWrapper}>
                <Link to="/campaign/detail"  replace  style={{ textDecoration: "none", color: "#000000DE" }}>
                    <Button fullWidth className={classes.button }variant="contained" color="secondary" >Ver</Button>
                </Link>

            </div>
        </Container>

    )
}

export default CardCampaign
