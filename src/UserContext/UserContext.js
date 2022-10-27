import React from 'react';
import { createContext } from 'react';
import app from '../component/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSign = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const githubSign = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // const logOut = () => {
    //     return signOut(auth);
    // }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, [])

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