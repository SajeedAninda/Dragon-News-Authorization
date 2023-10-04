import React, { createContext, useEffect, useState } from 'react';
export let AuthContext = createContext();
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from './firebase.config';
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
import { GithubAuthProvider } from "firebase/auth";
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
    let [loggedUser, setLoggedUser] = useState(null);
    let googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    let githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }
    let register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    let login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    let logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedUser(user);
            } else {
                // User is signed out
                // ...
            }
        });

        return () => {
            unSubscribe();
        };
    }, []);





    let authorization = {
        googleLogin,
        githubLogin,
        register,
        login,
        loggedUser,
        logout
    }
    return (
        <AuthContext.Provider value={authorization}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;