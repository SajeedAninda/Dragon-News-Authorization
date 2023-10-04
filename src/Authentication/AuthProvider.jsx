import React, { createContext } from 'react';
export let AuthContext = createContext();
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from './firebase.config';
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
import { GithubAuthProvider } from "firebase/auth";
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
    let googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    let githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }
    let register=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    let login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }




    let authorization = {
        googleLogin,
        githubLogin,
        register,
        login
    }
    return (
        <AuthContext.Provider value={authorization}>
            {children};
        </AuthContext.Provider>
    );
};

export default AuthProvider;