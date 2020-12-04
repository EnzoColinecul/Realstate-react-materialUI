import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import {
    Container,
    Button,
    Typography,
    TextField,
} from '@material-ui/core/'
import { useFirebaseApp, useUser } from 'reactfire'
import 'firebase/auth'
import Header from './header/Header'
import useStyles from './Styles'


export default function Login(props) {
    const classes = useStyles()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user = useUser()
    const firebase = useFirebaseApp()

    const handleLogin = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
    }

    return (
        <>
            {
                user &&
                <Redirect to="/admin-home/" />
            }
            <Header arrowBack="true" />
            <Container className={classes.container} maxWidth="md" >
                <div className={classes.paper}>
                    <Typography variant="h5" align="center">
                        Ingresar como Administrador
                    </Typography>
                    <form className={classes.form} >
                        <TextField
                            className={classes.textField}
                            required
                            autoComplete
                            label="User"
                            value={email}
                            type="text"
                            id="email"
                            placeholder="Ej: admin@admin.com"
                            margin="normal"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            className={classes.textField}
                            required
                            autoComplete
                            value={password}
                            label="Password"
                            type="password"
                            id="password"
                            placeholder="Ej: admin"
                            margin="normal"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button onClick={handleLogin} className={classes.loginButton} variant="contained" color="primary" >
                            Ingresar
                        </Button>
                    </form>
                </div>
            </Container>
        </>
    )
}