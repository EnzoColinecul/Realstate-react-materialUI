import React from 'react'
import { NavLink } from 'react-router-dom'
import DrawerLeft from './DrawerLeft'
import SearchBar from './SearchBar'
import Filter from './Filter'
import PropTypes from 'prop-types'
import {
    AppBar,
    Toolbar,
    Slide,
    useScrollTrigger,
    Fab,
    Zoom,
    IconButton
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
    KeyboardArrowUp,
    ArrowBack
} from '@material-ui/icons/'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(6),
        right: theme.spacing(2),
        flexGrow: 1,

    },
    toolbar: {
        flexFlow: 0,
        minHeight: '0',
    },
    appbar: {
        padding: theme.spacing(0, 0, 1)
    },
    searchFilter: {
        padding: theme.spacing(4, 0, 0, 0)
    }
}));


function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
}

function ScrollTop(props) {
    const classes = useStyles();
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });
    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root} >
                {children}
            </div>
        </Zoom>
    )
}

ScrollTop.prototype = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
}

export default function Header(props) {
    const classes = useStyles()
    const { home, arrowBack } = props

    return (
        <>
            <HideOnScroll {...props}>
                <AppBar className={classes.appbar} position='sticky'>
                    <Toolbar className={classes.toolbar}>
                        {home &&
                            <>
                                <DrawerLeft />
                                <div className={classes.searchFilter}>
                                    <SearchBar />
                                    <Filter />
                                </div>
                            </>
                        }
                        {arrowBack &&
                            <IconButton
                                aria-label="back arrow"
                                color="inherit"
                                edge="start"
                            >
                                <NavLink
                                    to="/home"
                                    style={{
                                        textDecoration: 'none ',
                                        color: 'white'
                                    }}
                                >
                                    <ArrowBack />
                                </NavLink>
                            </IconButton>
                        }
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar className={classes.toolbar} id="back-to-top-anchor" />
            <ScrollTop {...props} >
                <Fab color="primary" size="medium" aria-label="scroll back to top">
                    <KeyboardArrowUp />
                </Fab>
            </ScrollTop>
        </>
    )
}