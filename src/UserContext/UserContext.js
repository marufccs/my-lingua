import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true);
    // registration 
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email and password
    const signIn = (email, password) =>  {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign in with google
    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    } 

    //sign in with github
    const provider2 = new GithubAuthProvider();
    const githubSignIn = () => {
        setLoading(true);
      return  signInWithPopup(auth, provider2)
    }

    // Get the user's data
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    // sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo = {user, setUser, signUp, signIn, googleSignIn, githubSignIn, logOut, loading, setLoading};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
{children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;