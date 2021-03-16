import React from 'react'

import { Switch, Route, useRouteMatch } from "react-router-dom"

import CampaignListContainer from './CampaignListContainer'
import CampaignContainer from './CampaignContainer'
import UsersContainer from './UsersContainer'

import { useStyles } from '../../styles/containers/styles'

import Drawer from '../../components/Drawer/Drawer'
import { config } from '../../components/ListItems/ListItems'

const ConfigContainer = () => {
    const classes = useStyles()
    let { path } = useRouteMatch()

    return (
        <div className={classes.root}>
            <Drawer listItems={config} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Switch>
                    <Route path={`${path}/campaign/list`}>
                        <CampaignListContainer />
                    </Route>
                    <Route path={`${path}/campaign/create`}>
                        <CampaignContainer />
                    </Route>
                    <Route path={`${path}/users`}>
                        <UsersContainer />
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

export default ConfigContainer
