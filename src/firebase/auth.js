import React, { useState } from 'react'
import { useFirebaseApp, useUser } from 'reactfire'
import 'firebase/auth'

export default function auth(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user = useUser()
    const firebase = useFirebaseApp()

    const handleLogin = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
    }

    const handleLogout = async () => {
        await firebase.auth().signOut()
    }
}
