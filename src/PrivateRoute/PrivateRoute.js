import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user} = useContext(AuthContext);
    return (
        <div>
            {
                user && user.uid? 
                children 
                :
                <Navigate to='/login' state={{from: location}} replace></Navigate>
            }
        </div>
    );
};

export default PrivateRoute;