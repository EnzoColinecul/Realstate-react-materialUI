import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'
import blue from '@material-ui/core/colors/blue'
import lightGreen from '@material-ui/core/colors/lightGreen'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBassline from '@material-ui/core/CssBaseline'


//Components
import useStyles from './components/Styles';
import Login from './components/Login'
import Home from './components/Home'
import Footer from './components/Footer'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: lightGreen[500]
        },
        icons: {
            main: '#4caf50',
        }
    },
});

function Router() {
    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <div className='test'>
                <CssBassline />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/Admin" component={Login} />
                        <Route exact path="/Home" component={Home} />
                        <Route exact path="/" component={Home} />
                    </Switch>
                </BrowserRouter>
                <footer className={classes.footer}>
                    <Footer />
                </footer>
            </div>
        </ThemeProvider>
    )
}

export default Router