import React from 'react';
import { createContext } from 'react';
import app from '../component/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSign = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const githubSign = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // const logOut = () => {
    // setLoading(true);
    //     return signOut(auth);
    // }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
            setUser(currentUser)
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const value = { loading, user, createUser, signIn, googleSign, githubSign }
    return (
        < div >
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </div >
    );
};

export default UserContext;