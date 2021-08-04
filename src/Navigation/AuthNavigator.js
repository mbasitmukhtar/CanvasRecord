import React, { useState, useEffect, createContext } from 'react'
import firebase from '../database/firebase';

import SignInStack from './SignInStack'
import SignOutStack from './SignOutStack'

export const AuthContext = createContext(null)

export default function AuthNavigator() {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState(null)
    console.log("auth navigator")


    // Handle user state changes
    function onAuthStateChanged(result) {
        setUser(result)
        if (initializing) setInitializing(false)
    }

    useEffect(() => {
        const authSubscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)
        console.log("auth navigator")
        // unsubscribe on unmount
        return authSubscriber
    }, [])

    if (initializing) {
        return null
    }

    return user ? (
        <AuthContext.Provider value={user}>
            <SignInStack />
        </AuthContext.Provider>
    ) : (
        <SignOutStack />
    )
}