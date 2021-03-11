import React from 'react';
import { HashRouter  as Router,  Switch, Route, } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';

import { ThemeProvider } from '@material-ui/core/styles';

import CampaingContainer from './containers/campaings/CampaingContainer'
import Navtab from './components/Navtab/Navtab'

import defaultTheme from './themes/defaultTheme'

import './App.css';


function App() {

  const darkModeOn =false;

  const theme = React.useMemo(() => defaultTheme(darkModeOn), [darkModeOn])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navtab />
      <Router>
        <Switch>
            <Route exact path="/">
              <CampaingContainer />
            </Route>
            <Route exact path="/campaing/list">
              <CampaingContainer />
            </Route>
            <Route exact path="/statistics">
              <CampaingContainer />
            </Route>
        </Switch>
      </Router>
    </ThemeProvider>

  );
}

export default App;
