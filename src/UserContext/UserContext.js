import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState('')
    // registration 
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email and password
    const signIn = (email, password) =>  {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // sign in with google
    const provider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    } 

    //sign in with github
    const provider2 = new GithubAuthProvider();
    const githubSignIn = () => {
      return  signInWithPopup(auth, provider2)
    }

    // Get the user's data
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    // sign out
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {user, setUser, signUp, signIn, googleSignIn, githubSignIn, logOut};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
{children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;