import React, { useState } from 'react'

import { Switch, Route, useRouteMatch } from "react-router-dom"


import ContactabilityContainer from './ContactabilityContainer'
import ConversationsContainer from './ConversationsContainer'
import CompromisesContainer from './CompromisesContainer'
import ComplianceContainer from './ComplianceContainer'
import OverviewContainer from './OverviewContainer'
import CallsContainer from './CallsContainer'
import TopsContainer from './TopsContainer'

import { useStyles } from '../../styles/containers/styles'

import StatisticsFilter from '../../components/Filters/StatisticsFilter'
import Drawer from '../../components/Drawer/Drawer'

import { statistics } from '../../components/ListItems/ListItems'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const RouterContainer = () => {
    const classes = useStyles()
    const [campaign, setCampaign] = useState('Todas las campañas')
    const [date, setDate] = useState('mes')

    const { path } = useRouteMatch()


    return (
        <div className={classes.root}>
            <Drawer listItems={statistics} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} >
                            <Paper className={classes.paper}>
                                <StatisticsFilter

                                    setCampaign={setCampaign}
                                    campaign={campaign}

                                    date={date}
                                    setDate={setDate}
                                />
                            </Paper>
                        </Grid>
                        <Switch>
                            <Route path={`${path}/contactability`}>
                                <ContactabilityContainer
                                    campaign={campaign}
                                    date={date}
                                />
                            </Route>
                            <Route path={`${path}/calls`}>
                                <CallsContainer />
                            </Route>
                            <Route path={`${path}/compromises`}>
                                <CompromisesContainer />
                            </Route>
                            <Route path={`${path}/compliance`}>
                                <ComplianceContainer
                                    campaign={campaign}
                                    date={date}
                                />
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
