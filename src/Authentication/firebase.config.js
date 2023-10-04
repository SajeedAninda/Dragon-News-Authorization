import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAt0ILFe8TjR2eg3v4Xh3aRHGoIvqnko0M",
    authDomain: "dragon-news-auth-22924.firebaseapp.com",
    projectId: "dragon-news-auth-22924",
    storageBucket: "dragon-news-auth-22924.appspot.com",
    messagingSenderId: "365076980256",
    appId: "1:365076980256:web:38781e14383350a18f5245"
};

export const app = initializeApp(firebaseConfig);