import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            {
                user && user.uid? 
                children 
                :
                <Navigate to='/login'></Navigate>
            }
        </div>
    );
};

export default PrivateRoute;