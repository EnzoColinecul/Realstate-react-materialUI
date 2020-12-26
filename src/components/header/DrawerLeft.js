import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Drawer,
    List,
    IconButton,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core/'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import MenuIcon from '@material-ui/icons/Menu'
import SettingsIcon from '@material-ui/icons/Settings'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import { ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: '240',
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}))

export default function DrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }

    const style = {
        textDecoration: 'none ',
        color: 'black'
    }

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Link to="/admin" style={style}>
                                Ingresar como Administrador
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}