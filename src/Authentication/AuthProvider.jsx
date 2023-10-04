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
    let [loading, setLoading] = useState(true);
    let googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    let githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    let register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    let login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    let logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setLoggedUser(user);
            setLoading(false);
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
        logout,
        loading
    }
    return (
        <AuthContext.Provider value={authorization}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;