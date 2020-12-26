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
import useStyles from './components/Styles'
import Login from './components/Login'
import Home from './components/Home'
import Footer from './components/Footer'
import AdminHome from './components/admin/AdminHome'
import NewProperty from './components/admin/NewProperty'
import Steps from './components/admin/Steps'

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
                        <Route exact path="/admin" component={Login} />
                        <Route exact path="/admin/home" component={AdminHome} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/admin/newProperty" component={Steps} />
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