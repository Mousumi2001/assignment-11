import React from 'react';
import { createContext } from 'react';
import app from '../component/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)
const UserContext = ({ children }) => {
    const [user, setUser] = useState({})


    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }

    const googleSign = (provider) => {
        signInWithPopup(auth, provider)
    }

    const githubSign = (provider) => {
        signInWithPopup(auth, provider)
    }

    const value = { user, createUser, signIn, googleSign, githubSign }
    return (
        < div >
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </div >
    );
};

export default UserContext;