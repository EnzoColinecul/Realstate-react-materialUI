import React from 'react'
import {
    Container,
    Button,
    Typography,
    TextField,
} from '@material-ui/core/'
import Header from './header/Header'
import useStyles from './Styles'


export default function Login() {
    const classes = useStyles()

    return (
        <>
            <Header />
            <Container className={classes.container} maxWidth="md" >
                <div className={classes.paper}>
                    <Typography variant="h5" align="center">
                        Ingresar como Administrador
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            required
                            autoComplete
                            label="User"
                            type="email"
                            id="email"
                            placeholder="Ej: admin@admin.com"
                            margin="normal"
                        />
                        <TextField
                            required
                            autoComplete
                            label="Password"
                            type="password"
                            id="password"
                            placeholder="Ej: admin"
                        />
                        <Button className={classes.loginButton} variant="contained" color="primary" >
                            Ingresar
                        </Button>
                    </form>
                </div>
            </Container>
        </>
    )
}