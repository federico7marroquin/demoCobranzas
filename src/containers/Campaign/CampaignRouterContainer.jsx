import React from 'react'

import { Switch, Route, useRouteMatch } from "react-router-dom"

import { useStyles } from '../../styles/containers/styles'

import Drawer from '../../components/Drawer/Drawer'

import EmailContainer from './EmailContainer'
import DetailContainer from './DetailContainer'

import { campaign } from '../../components/ListItems/ListItems'

const CampaignRouterContainer = () => {
    const classes = useStyles()
    let { path } = useRouteMatch()

    return (
        <div className={classes.root}>
            <Drawer listItems={campaign} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Switch>
                    <Route path={`${path}/detail`}>
                        <DetailContainer />
                    </Route>
                    <Route path={`${path}/email`}>
                        <EmailContainer />
                    </Route>
                    <Route path={`${path}/sms`}>
                        <h2>Pronto...</h2>
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

export default CampaignRouterContainer
