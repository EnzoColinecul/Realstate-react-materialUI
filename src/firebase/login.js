import React, { useState, useEffect } from 'react'
import fire from './fire'

const login  = () => {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [isLogged, setIsLogged] = useState(false)

    const clearInputs = () => {
        setPassword('')
        setEmail('')
    }

    const clearErrors = () => {
        setEmailError('')
        setPasswordError('')
    }

    const handleLogin = () => {
        clearErrors()
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch(err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPassword(err.message);
                        break;
                }
            })
    }

    const signOut = () => {
        fire.auth().signOut() 
    }

    const authListener = () =>{
        fire
            .auth()
            .onAuthStateChanged((user) => {
                if(user){
                    clearInputs()
                    setUser(user)
                }else{
                    setUser('')
                }
            })
    }

    useEffect(() => {
        authListener()
    }, [])

    return(
        <h1>Hello World</h1>
    )
}

export default login;