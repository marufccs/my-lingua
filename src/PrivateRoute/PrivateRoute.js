import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <Spinner animation = 'border' variant = 'primary'></Spinner>}
        if(!user){
            return <Navigate to = '/login' state={{from: location}} replace></Navigate>
        }
    return (
                children 
    );
};

export default PrivateRoute;