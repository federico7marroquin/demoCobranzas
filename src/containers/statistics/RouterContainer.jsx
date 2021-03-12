import React from 'react'
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom"

import { useStyles } from '../../styles/containers/styles'

import Drawer from '../../components/Drawer/Drawer'

import ContactabilityContainer from './ContactabilityContainer'
import CallsContainer from './CallsContainer'
import CompromisesContainer from './CompromisesContainer'
import TopsContainer from './TopsContainer'
import OverviewContainer from './OverviewContainer'
import ConversationsContainer from './ConversationsContainer'

const RouterContainer = () => {
    const classes = useStyles()
    let { path } = useRouteMatch()

    return (
        <div className={classes.root}>
            <Drawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
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
            </main>
        </div >
    )
}

export default RouterContainer
