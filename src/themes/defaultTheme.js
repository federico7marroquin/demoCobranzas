import { createMuiTheme } from '@material-ui/core/styles'

let defaultTheme = (darkModeOn) => createMuiTheme({
    palette: {
        type: darkModeOn? 'dark': 'light',
        // primary: {
        //     // main: darkModeOn? '#333333': '#fff',
        // },
        secondary: {
            main:  darkModeOn? '#7AA6DE': '#18A0FB',
        }
    },
    appBar: {
        color: '#fff',
    },
    charts: {
        first: '#54D335',
        third: '#90B2E3',
        second: '#1C83CF',
        fourth: '#855CF8',
        fifth: '#855CF8',
    }


})


export default defaultTheme