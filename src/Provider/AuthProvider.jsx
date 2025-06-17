import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);

    const [loading , setLoading] = useState(true);

// console.log(user);

    // createUser
    const createUser = (email , password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password);
    }


    // observer
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return() => {
            unsubscribe();
        }

    } , [])

    // login
    const logIn = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password)
    }

    // logout
    const logOut = () => {
        return signOut(auth);
    }


    // update profile
    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser , updateData);
    }


    // googleLogin
    const googleLogIn = (provider) => {
        return signInWithPopup(auth , provider);
    }


    const authData = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        logIn,
        logOut,
        googleLogIn,
        updateUser,
    }

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;