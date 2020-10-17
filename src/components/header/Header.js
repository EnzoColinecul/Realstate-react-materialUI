import React from 'react'
import DrawerLeft from './DrawerLeft'
import SearchBar from './SearchBar'
import PropTypes from 'prop-types'
import { 
    AppBar,
    Toolbar,
    Slide,
    useScrollTrigger,
    Fab,
    Zoom,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

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
        padding: theme.spacing(1,0,4)
    }
}))


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
    const classes = useStyles();

    return (
        <>
            <HideOnScroll {...props}>
                <AppBar className={classes.appbar} position='sticky'>
                    <Toolbar className={classes.toolbar}>
                        <DrawerLeft />
                        <SearchBar />
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar className={classes.toolbar} id="back-to-top-anchor" />
            <ScrollTop {...props} >
                <Fab color="primary" size="medium" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    )
}