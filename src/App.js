import React from 'react';
import { HashRouter as Router, Switch, Route, } from "react-router-dom"

import CssBaseline from '@material-ui/core/CssBaseline'

import { ThemeProvider } from '@material-ui/core/styles'

import CampaingContainer from './containers/campaings/CampaingContainer'
import CampaingListContainer from './containers/campaings/CampaingListContainer'
import RouterContainer from './containers/statistics/RouterContainer'

import Navtab from './components/Navtab/Navtab'

import defaultTheme from './themes/defaultTheme'

import './App.css'


function App() {

  const darkModeOn = false

  const theme = React.useMemo(() => defaultTheme(darkModeOn), [darkModeOn])

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navtab />
        <Switch>
          <Route exact path="/">
            <CampaingContainer />
          </Route>
          <Route exact path="/campaing/list">
            <CampaingListContainer />
          </Route>
          <Route exact path="/statistics">
            <RouterContainer />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>

  );
}

export default App;
