import app from "./firebaseconfig"

import {
    getAuth,
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged, signOut
} from 'firebase/auth';

const auth = getAuth(app);

export {
    auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged, signOut, getAuth
};