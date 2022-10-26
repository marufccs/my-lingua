import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData();
    return (
        <div>
            <h2>This is the checkout page</h2>
        </div>
    );
};

export default Checkout;