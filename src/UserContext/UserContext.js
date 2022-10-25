import React, { createContext } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    // registration 
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in 
    const signIn = (email, password) =>  {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {signUp, signIn};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
{children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;