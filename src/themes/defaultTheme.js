import { createMuiTheme } from '@material-ui/core/styles';

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
        first: '#',
        second: '#',
        third: '#',
        fourth: '#',
        fifth: '#',
    }


})


export default defaultTheme