import React, { createContext } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    // registration 
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {signUp};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
{children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;