import React from 'react'
import { Redirect } from 'react-router-dom'
import {
    Button,
    Typography
} from '@material-ui/core/'
import { useUser, useFirebaseApp } from 'reactfire'
import Header from './header/Header'
import memeImage from '../assets/images/meme-test.jpg'

export default function AdminHome(props) {

    const style = {
        width: '100%'
    }

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
            <Header />
            <img src={memeImage} style={style} />
            <Typography variant="h5">Bien ahii rey</Typography>
            <Typography variant="h5">ingresaste como administrador</Typography>
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