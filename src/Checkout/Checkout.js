import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';
import './Checkout.css'

const Checkout = () => {
    const { user} = useContext(AuthContext);
 const data = useLoaderData();
const {title, img} = data;
    return (
       <div>
        <h1 className='text-success mt-5 pt-5'>Congratulations {user?.displayName}!!</h1>
        <h3>You finally got the premium access of the {title} course!</h3>
        <img src={img} alt="" />
       </div>
    );
};

export default Checkout;