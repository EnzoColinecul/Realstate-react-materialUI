import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import PropTypes from 'prop-types'
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(6),
        right: theme.spacing(2),
    },
    toolbar: {
        minHeight: '0'
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
                <AppBar position='sticky'>
                    <ToolBar>
                        <Typography variant='h6' noWrap>
                            Header
                    </Typography>
                    </ToolBar>
                </AppBar>
            </HideOnScroll>
            <ToolBar className={classes.toolbar} id="back-to-top-anchor" />
            <ScrollTop {...props} >
                <Fab color="primary" size="medium" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    )
}