import React from 'react'
import Button from '@material-ui/core/Button'
import FilterIcon from '@material-ui/icons/FilterList'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    button: {
        flexGrow: 1,
        display: 'block',
        padding: theme.spacing(0, 2),
        marginTop: theme.spacing(1)
    }
}))

export default function Filter() {
    const classes = useStyles();

    return (
        <div className={classes.button}>
            <Button size='small' startIcon={<FilterIcon />} color='primary' variant='contained'>
                Filtrar
            </Button>
        </div>
    )
}