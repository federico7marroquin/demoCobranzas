import React from 'react'

import { Switch, Route, useRouteMatch } from "react-router-dom"


import ContactabilityContainer from './ContactabilityContainer'
import ConversationsContainer from './ConversationsContainer'
import CompromisesContainer from './CompromisesContainer'
import OverviewContainer from './OverviewContainer'
import CallsContainer from './CallsContainer'
import TopsContainer from './TopsContainer'

import { useStyles } from '../../styles/containers/styles'

import Drawer from '../../components/Drawer/Drawer'

import { statistics } from '../../components/ListItems/ListItems'

const RouterContainer = () => {
    const classes = useStyles()
    let { path } = useRouteMatch()

    return (
        <div className={classes.root}>
            <Drawer listItems={statistics}/>
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
