import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Navtab from './components/Navtab/Navtab'
import defaultTheme from './themes/defaultTheme'
import { ThemeProvider } from '@material-ui/core/styles';


function App() {

  const darkModeOn =false;

  const theme = React.useMemo(() => defaultTheme(darkModeOn), [darkModeOn])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navtab />
      <h1 style={{ marginTop: "100px" }}> Hola</h1>
    </ThemeProvider>

  );
}

export default App;
