import React, { useState } from 'react'
import { HashRouter as Router, Switch, Route, } from "react-router-dom"

import CssBaseline from '@material-ui/core/CssBaseline'

import { ThemeProvider } from '@material-ui/core/styles'

import RouterContainer from './containers/statistics/RouterContainer'
import ConfigContainer from './containers/config/ConfigContainer'
import Signing from './components/Signin/Signin'

import Navtab from './components/Navtab/Navtab'

import defaultTheme from './themes/defaultTheme'

import './App.css'

function App() {

  const darkModeOn = false

  const [login, setLogin] = useState(false)

  const theme = React.useMemo(() => defaultTheme(darkModeOn), [darkModeOn])

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {login ?
          <>
            <Navtab />
            <Switch>
              <Route path="/config">
                <ConfigContainer />
              </Route>
              <Route path="/statistics">
                <RouterContainer />
              </Route>
              {/* <Route exact path="/">
                <RouterContainer />
              </Route> */}
            </Switch>
          </>
          :
          <Signing
            setLogin={setLogin}
          />
        }
      </ThemeProvider>
    </Router>
  )
}

export default App
