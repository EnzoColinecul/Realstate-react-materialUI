import React from 'react'
import { Redirect } from 'react-router-dom'
import {
    Button,
} from '@material-ui/core/'
import { useUser, useFirebaseApp } from 'reactfire'
import Header from '../header/Header'


export default function AdminHome(props) {

    const firebase = useFirebaseApp()

    const user = useUser()

    const handleLogout = async () => {
        await firebase.auth().signOut()
    }
    return (
        <>
            {
                !user &&
                <Redirect to="/admin/" />
            }
            <Header admin="true" />
            <Button
                color='primary'
                variant='contained'
                onClick={handleLogout}
            >
                Cerrar sesion
            </Button>
        </>
    )
}