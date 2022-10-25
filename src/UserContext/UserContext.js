import React, { createContext } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
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

    const authInfo = {signUp, signIn, googleSignIn, githubSignIn};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
{children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;