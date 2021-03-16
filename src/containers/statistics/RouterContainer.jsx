import React from 'react'

import { Switch, Route, useRouteMatch } from "react-router-dom"


import ContactabilityContainer from './ContactabilityContainer'
import ConversationsContainer from './ConversationsContainer'
import CompromisesContainer from './CompromisesContainer'
import ComplianceContainer from './ComplianceContainer'
import OverviewContainer from './OverviewContainer'
import CallsContainer from './CallsContainer'
import TopsContainer from './TopsContainer'

import { useStyles } from '../../styles/containers/styles'

import Drawer from '../../components/Drawer/Drawer'
import StatisticsFilter from '../../components/Filters/StatisticsFilter'

import { statistics } from '../../components/ListItems/ListItems'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'

const RouterContainer = () => {
    const classes = useStyles()
    let { path } = useRouteMatch()

    return (
        <div className={classes.root}>
            <Drawer listItems={statistics} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} >
                            <Paper className={classes.paper}>
                                <StatisticsFilter />
                            </Paper>
                        </Grid>
                        <Switch>
                            <Route path={`${path}/contactability`}>
                                <ContactabilityContainer />
                            </Route>
                            <Route path={`${path}/calls`}>
                                <CallsContainer />
                            </Route>
                            <Route path={`${path}/compromises`}>
                                <CompromisesContainer />
                            </Route>
                            <Route path={`${path}/compliance`}>
                                <ComplianceContainer />
                            </Route>
                            <Route path={`${path}/tops`}>
                                <TopsContainer />
                            </Route>
                            <Route path={`${path}/overview`}>
                                <OverviewContainer />
                            </Route>
                            <Route path={`${path}/conversations`}>
                                <ConversationsContainer />
                            </Route>
                        </Switch>
                    </Grid>
                </Container>
            </main>
        </div >
    )
}

export default RouterContainer
